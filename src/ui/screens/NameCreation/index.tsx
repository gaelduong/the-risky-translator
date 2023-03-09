import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateName } from '@Redux/slices/creatureSlice'

const NameCreation = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCreateName = () => {
    dispatch(updateName({ name }))

    setTimeout(() => {
      navigate('/town/0')
    }, 1000)
  }
  return (
    <div>
      <p>Give a name to your Creature</p>
      <input type="text" onChange={e => setName(e.target.value)} />
      <div>
        <button onClick={handleCreateName}>Done</button>
      </div>
    </div>
  )
}

export default NameCreation
