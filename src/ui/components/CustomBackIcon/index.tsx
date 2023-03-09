import { useState } from 'react'
import { Link } from 'react-router-dom'
import { backImage } from '@Assets/images'

const CustomBackIcon = ({
  linkTo,
  popup,
  state
}: {
  linkTo: string
  state?: any
  popup?: {
    prompt: string
    yesText: string
    noText: string
  } | null
}) => {
  const [showPopup, setShowPopup] = useState(false)

  function handlePopupClose() {
    setShowPopup(false)
  }

  if (!popup) {
    return (
      <div className="back-image">
        <Link to={linkTo} state={state}>
          <img style={{ marginLeft: '1rem' }} src={backImage} alt="back" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="back-image">
        <img
          // style={{ marginLeft: '1rem' }}
          src={backImage}
          alt="back"
          onClick={() => setShowPopup(true)}
        />
      </div>
      {showPopup && (
        <div className="popup">
          <p> {popup.prompt}</p>
          <div>
            <Link to={linkTo}>
              <button className="close">{popup.yesText}</button>
            </Link>
          </div>

          <div>
            <button className="stay" onClick={handlePopupClose}>
              {popup.noText}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomBackIcon
