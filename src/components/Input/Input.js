import React, { useState, useReducer } from 'react'
import { reducer } from './../../reducer/reducer'
import { ACTIONS } from './../../reducer/actions'
import { state } from './../../reducer/state'

const Input = () => {
	const [todo, setTodo] = useState('')
	const [todos, dispatch] = useReducer(reducer, state)

	return (
		<input
			type='text'
			className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500 focus:outline-none focus:border-gray-800'
			placeholder='Add Todo'
			value={todo}
			onChange={(e) => {
				setTodo(e.target.value)
			}}
		/>
	)
}

export default Input
