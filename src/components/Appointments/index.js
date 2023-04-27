// Write your code here
import './index.css'
import {useState} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

const Appointments = () => {
  const [store, setStore] = useState([])
  const [data, setData] = useState({name: '', date: '', starred: false})
  const [stared, setStared] = useState(false)

  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const stareChanged = id => {
    setStore(
      store.map(eachApp =>
        eachApp.id === id ? {...eachApp, starred: !eachApp.starred} : eachApp,
      ),
    )
  }

  const onSubmtHandler = e => {
    const {name, date, starred} = data
    e.preventDefault()
    console.log('add clicked')
    const newObject = {
      id: v4(),
      name,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      starred,
    }
    setStore([...store, newObject])
    setData({name: '', date: '', starred: false})
  }

  const starredAppointments = () => {
    setStared(!stared)
  }

  const filteredStare = stared
    ? store.filter(app => app.starred === true)
    : store

  const {name, date} = data

  return (
    <div className=" card bg-success p-2 text-dark bg-opacity-25">
      <div className="card login-card container">
        <div className="row">
          <h1 className="m-3">Add Appointments</h1>
          <form className="col-5 m-3" onSubmit={onSubmtHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">TITLE</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={changeHandler}
                value={name}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">DATE</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                value={date}
                onChange={changeHandler}
                name="date"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              ADD
            </button>
          </form>
          <div className="col-6 m-3">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>
          <hr />
          <div className="d-flex flex-row justify-content-between">
            <h1>Appointments</h1>
            <button
              type="button"
              className=" starred-btn btn btn-outline-warning"
              onClick={starredAppointments}
            >
              Starred
            </button>
          </div>
          <ul>
            {filteredStare.map(app => (
              <AppointmentItem
                data={app}
                stareChanged={stareChanged}
                key={app.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Appointments
