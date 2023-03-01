import { Link } from 'react-router-dom'

const Town = () => {
  return (
    <div style={{ touchAction: 'none' }}>
      <Link to="/profile">Profile</Link>
      <Link to="/monster-map">MonsterMap</Link>
      <Link to="/training">Training</Link>
      <div className="test-container">
        <div className="test">Test</div>
        <div className="test">Test</div>
        <div className="test">Test</div>
      </div>
    </div>
  )
}

export default Town
