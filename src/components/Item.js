import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Item = ({ item }) => {
	const { editItem, deleteItem } = useContext(DataContext)
	return (
		<div className='mb-2'> 
			<h4>{item.name}</h4>
			<p>{item.qty}</p>
			<button className='btn-edit' onClick={() => editItem(item)}>
				Edit
			</button>
			<button className='btn-delete' onClick={() => deleteItem(item.id)}>
				Delete
			</button>
		</div>
	)
}

export default Item
