import { useState } from 'react'
import { Link } from 'react-router-dom'
import { backImage } from '@Assets/images'

const BackWithPopup = () => {
  const [showPopup, setShowPopup] = useState(false)

  function handlePopupClose() {
    setShowPopup(false)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <img
          style={{ marginLeft: '1rem' }}
          src={backImage}
          alt="back"
          onClick={() => setShowPopup(true)}
        />
      </div>
      {showPopup && (
        <div className="popup">
          <p> Are you sure you want to leave your training?</p>
          <div>
            <Link to="/town">
              <button className="close">Leave</button>
            </Link>
          </div>

          <div>
            <button onClick={handlePopupClose}>Stay</button>
          </div>
        </div>
      )}
    </>
  )
}

export default BackWithPopup
