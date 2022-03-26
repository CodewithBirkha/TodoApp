import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useState, useEffect } from 'react'

const Form = () => {
	const { toEdit, addItem, updateItem } = useContext(DataContext)
	const [name, setName] = useState('')
	const [qty, setQty] = useState('')

	const submit = (e) => {
		e.preventDefault() //so that form doesnot get submitted
		if (toEdit) {
			updateItem({
				id: toEdit.id,
				name,
				qty,
			})
		} else {
			const newItem = {
				id: Math.floor(Math.random() * 10000 + 1),
				name,
				qty,
			}
			addItem(newItem)
		}
		setName('')
		setQty('')
	}

	useEffect(() => {
		if (toEdit) {
			setName(toEdit.name)
			setQty(toEdit.qty)
		}
	}, [toEdit])

	return (
		<form onSubmit={submit}>
			<h3 className='mb-2'>
				{toEdit ? 'Edit Shopping Item' : 'Add Shopping Item'}
			</h3>
			<div className='form-group'>
				<label>Item Name:</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label>Item quantity:</label>
				<input
					type='text'
					value={qty}
					onChange={(e) => setQty(e.target.value)}
				/>
			</div>
			<input
				type='submit'
				value={toEdit ? 'Update Item' : 'Add Item'}
				className='btn'
			/>
		</form>
	)
}

export default Form
