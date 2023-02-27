import { useContext } from 'react'
import {
  formatNumberWithCommas,
  formatTime,
  getItemBuyRequirements,
  getItemId,
  getItemIsBought,
  getItemName
} from '../../../functions/itemUtils'
import { AppContext } from '../../../context'
import ProgressBar from '../../components/ProgressBar'

const Item = ({ item }) => {
  const { state, dispatch } = useContext(AppContext)
  const money = state.money

  const id = getItemId(item)
  const name = getItemName(item)
  const isBought = getItemIsBought(item)
  const buyRequirements = getItemBuyRequirements(item)

  const {
    moneyGenerated,
    timeRemainingInSeconds,
    progress,
    lastCollectionTime,
    timeBetweenCollections,
    moneyPerCollection
  } = item.generate

  const buyItem = (id, cost) => {
    dispatch({ type: 'BUY_ITEM', payload: id })
    dispatch({ type: 'UPDATE_MONEY', payload: -cost })
  }

  //   Show Buy button
  const buyButton = (
    <div>
      <h3>{name}</h3>
      <div>
        Money Per Collection: +${formatNumberWithCommas(moneyPerCollection)}
      </div>
      <div> Time: {formatTime(timeBetweenCollections)}</div>
      <button
        key={id}
        className="button1"
        onClick={() => buyItem(id, buyRequirements.money)}
        disabled={money < buyRequirements.money}
      >
        ${formatNumberWithCommas(buyRequirements.money)}
      </button>
      <hr />
    </div>
  )

  if (!isBought) {
    return buyButton
  }

  return (
    <div key={item.id}>
      <h3>{name}</h3>
      <div>
        Money Per Collection: +${formatNumberWithCommas(moneyPerCollection)}
      </div>
      <div>Money Generated:{moneyGenerated}</div>
      <div>{formatTime(Math.floor(timeRemainingInSeconds))}</div>
      {/* <div> {formatTime(timeBetweenCollections)}</div> */}
      <ProgressBar progress={progress} />
      {/* <div>LastC:{lastCollectionTime}</div> */}
      <hr />
    </div>
  )
}

export default Item
