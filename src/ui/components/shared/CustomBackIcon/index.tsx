import { useState } from 'react'
import { Link } from 'react-router-dom'
import { backArrow } from '@Asset/images'

const CustomBackIcon = ({
  linkTo,
  popup,
  state
}: {
  linkTo: string | number
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
      <div className="absolute top-[10vh] left-[1vh] drop-shadow-md">
        {/* @ts-ignore */}
        <Link to={linkTo} state={state}>
          <img style={{ marginLeft: '1rem' }} src={backArrow} alt="back" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="absolute top-[10vh] left-[1vh] drop-shadow-md">
        <img src={backArrow} alt="back" onClick={() => setShowPopup(true)} />
      </div>
      {showPopup && (
        <>
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div
            className="bg-[#f5fbfd] w-[70vw] max-w-[387px] min-w-[350px]
        fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2
        p-5 shadow-md rounded-lg text-center z-50"
          >
            <p className="text-lg font-semibold mb-4"> {popup.prompt}</p>
            <div>
              {/* @ts-ignore */}
              <Link to={linkTo}>
                <button className="w-full py-2 mb-2 text-white font-semibold rounded-md bg-[#e74141] hover:bg-red-600">
                  {popup.yesText}
                </button>
              </Link>
            </div>

            <div>
              <button
                className="block w-full py-2 text-gray-600 font-semibold rounded-md border border-gray-400 hover:text-gray-800 hover:border-gray-600"
                onClick={handlePopupClose}
              >
                {popup.noText}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CustomBackIcon
