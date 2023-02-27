import { useContext } from 'react'
import { AppContext } from '../../../context'
import { getItemId } from '../../../functions/itemUtils'
import { useUpdateItems } from '../../../hooks/useUpdateItems'
import Item from '../../components/Item'

const ItemList = () => {
  const { state } = useContext(AppContext)
  const items = state.items

  useUpdateItems()

  return items.map(item => <Item key={getItemId(item)} item={item} />)
}

export default ItemList
