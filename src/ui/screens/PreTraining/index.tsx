import { Link } from 'react-router-dom'

const PreTraining = () => {
  return (
    <>
      <div>In this training, you need to...</div>
      <div>
        {' '}
        <Link to="/training">
          <button>Start session</button>
        </Link>
      </div>
    </>
  )
}

export default PreTraining
