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
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-xl font-bold mb-6">Give a name to your Creature</p>

      <input
        type="text"
        onChange={e => setName(e.target.value)}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
        w-[50%] min-w-[270px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Some name..."
      />
      <div>
        <button
          className="w-full py-2 px-4 my-4 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600"
          onClick={handleCreateName}
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default NameCreation
