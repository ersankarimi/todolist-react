import React, { useState, useReducer } from 'react'
import { inputClasses } from './Input.classes'
import { reducer } from './../../reducer/reducer'
import { ACTIONS } from './../../reducer/actions'
import { state } from './../../reducer/state'

const Input = () => {
	const [todo, setTodo] = useState('')
	const [todos, dispatch] = useReducer(reducer, state)

	return (
		<input
			type='text'
			className={inputClasses}
			placeholder='Add Todo'
			value={todo}
			onChange={(e) => {
				setTodo(e.target.value)
			}}
		/>
	)
}

export default Input
