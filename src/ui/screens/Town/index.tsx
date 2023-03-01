import { Link } from 'react-router-dom'
import { creatureImage } from '@Assets/images'
const Town = () => {
  return (
    <div style={{ touchAction: 'none' }}>
      <Link to="/profile">Profile</Link>
      <Link to="/monster-map">MonsterMap</Link>
      <Link to="/training">Training</Link>
      <h2> </h2>
      <div className="container">
        <button className="leave">Leave</button>
        <img className="creature" src={creatureImage} alt="s" />
        <h2 className="header">Time</h2>
        <button className="yes-button">Yes</button>
        <button className="no-button">No</button>
      </div>
      {/* <div className="test-container">
        <div className="test">Test</div>
        <div className="test">Test</div>
        <div className="test">Test</div>
      </div> */}
    </div>
  )
}

export default Town
