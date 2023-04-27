// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {data, stareChanged} = props
  const {name, date, starred} = data
  const changeStare = () => {
    const {id} = data
    stareChanged(id)
  }
  return (
    <li className="d-flex flex-column shadow">
      <div className="d-flex flex-row justify-content-between">
        <p>{name}</p>
        {starred ? (
          <button data-testid="star" type="button" onClick={changeStare}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
          </button>
        ) : (
          <button data-testid="star" type="button" onClick={changeStare}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          </button>
        )}
      </div>
      <p>{date}</p>
    </li>
  )
}
export default AppointmentItem
