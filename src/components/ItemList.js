import { useContext } from 'react'
import Item from './Item'
import DataContext from '../context/DataContext'

const ItemList = () => {
	const { items } = useContext(DataContext)
	return (
		<div>
			{items.map((item) => (
				<Item item={item} key={item.id} />
			))}
		</div>
	)
}

export default ItemList
