import { Link } from 'react-router-dom'
// import { creatureImage } from '@Assets/images'

const Training = () => {
  return (
    <div>
      <div style={{ touchAction: 'none' }}>
        <h2> </h2>
        <div className="container">
          <Link to="/town">
            <button className="leave">Leave</button>
          </Link>
          {/* <img className="creature" src={creatureImage} alt="s" />
          <h2 className="header">Time</h2>
          <button className="yes-button">Yes</button>
          <button className="no-button">No</button> */}
        </div>
        {/* <div className="test-container">
        <div className="test">Test</div>
        <div className="test">Test</div>
        <div className="test">Test</div>
      </div> */}
      </div>
    </div>
  )
}

export default Training
