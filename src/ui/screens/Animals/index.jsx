import { useContext } from 'react'
import { AppContext } from '../../../context'
import {
  getAnimalBuyRequirements,
  getAnimalId,
  getAnimalIsBought,
  getAnimalName
} from '../../../functions/animalUtils'

const Animals = () => {
  const { state, dispatch } = useContext(AppContext)
  const money = state.money
  const animals = state.animals
  console.log(animals)

  const buyAnimal = (id, cost) => {
    dispatch({ type: 'BUY_ANIMAL', payload: id })
    dispatch({ type: 'UPDATE_MONEY', payload: -cost })
  }

  return (
    <div>
      {animals.map(animal => {
        const id = getAnimalId(animal)
        const name = getAnimalName(animal)
        const isBought = getAnimalIsBought(animal)
        const buyRequirements = getAnimalBuyRequirements(animal)

        if (!isBought) {
          return (
            <div key={id}>
              <h2>{name}</h2>
              <div>
                <button
                  disabled={money < buyRequirements.money}
                  onClick={() => buyAnimal(id, buyRequirements.money)}
                >
                  Buy ${buyRequirements.money}
                </button>
              </div>
            </div>
          )
        }
        return (
          <div key={id}>
            <h2>{name}</h2>
            <div>{buyRequirements.money}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Animals
