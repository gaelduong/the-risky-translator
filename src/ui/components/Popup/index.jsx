import { Link } from 'react-router-dom'

const Popup = ({ fromMapId, locationId, onClose }) => {
  return (
    <div className="popup">
      <p> Select a job type:</p>
      <Link
        to="/work"
        state={{ fromMapId, locationId, jobType: 'recog_type_input' }}
      >
        <button>Typing</button>
      </Link>
      <Link
        to="/work"
        state={{ fromMapId, locationId, jobType: 'recog_multiple_choice' }}
      >
        <button>Multiple Choice</button>
      </Link>
      <button className="close" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default Popup
