import { Link } from 'react-router-dom'
import { ROUTE } from '@Route/index'

const PreTraining = () => {
  return (
    <>
      <div>In this training, you need to...</div>
      <div>
        <Link to={ROUTE.TRAINING.path}>
          <button>Start session</button>
        </Link>
      </div>
    </>
  )
}

export default PreTraining
