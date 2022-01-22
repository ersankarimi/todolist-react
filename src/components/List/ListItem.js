import React from 'react'
import RemoveButton from './../Button/RemoveButton'
import DoneButton from './../Button/DoneButton'
import NotDoneButton from './../Button/NotDoneButton'
import { ACTIONS } from './../../reducer/actions'

const List = (props) => {
	const { todo } = props
	const handleDone = () => {
		props.dispatch({
			type: ACTIONS.TODO_DONE,
			payload: {
				id: todo.id,
			},
		})
	}
	const handleNotDone = () => {
		props.dispatch({
			type: ACTIONS.TODO_NOT_DONE,
			payload: {
				id: todo.id,
			},
		})
	}

	const handleRemoveTodo = () => {
		props.dispatch({
			type: ACTIONS.REMOVE_TODO,
			payload: {
				id: todo.id,
			},
		})
	}
	return (
		<li className='flex my-4 items-center bg-gray-100 p-2' key={todo.id}>
			<p className='w-full text-gray-700 text-xl'>{todo.todoValue}</p>
			{todo.complete ? (
				<NotDoneButton handleNotDone={handleNotDone} />
			) : (
				<DoneButton handleDone={handleDone} />
			)}
			<RemoveButton handleRemoveTodo={handleRemoveTodo} />
		</li>
	)
}

export default List
