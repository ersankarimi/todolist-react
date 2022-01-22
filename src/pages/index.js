import React, { useState, useReducer } from 'react'
import Container from './../components/Container/Container'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import ListItem from '../components/List/ListItem'
import AddButton from '../components/Button/AddButton'
import Input from '../components/Input/Input'
import { reducer } from './../reducer/reducer'
import { ACTIONS } from './../reducer/actions'

export const initialState = {
	todos: [],
}

const Pages = () => {
	// set todo value
	const [todo, setTodo] = useState('')

	// set reducer
	const [todos, dispatch] = useReducer(reducer, initialState)

	// handle todo value input
	const handleChange = (value) => {
		setTodo(value)
	}

	// add todo
	const handleSubmit = (e) => {
		e.preventDefault()
		if (todo) {
			dispatch({
				type: ACTIONS.ADD_TODO,
				payload: {
					todoValue: todo,
					id: new Date().getTime().toString(),
					complete: false,
				},
			})
		} else {
			dispatch({
				type: ACTIONS.NO_VALUE,
			})
			alert("Can't Fill To-Do Value with Blank")
		}
		setTodo('')
	}

	return (
		<Container>
			<Header />
			<form className='flex mt-4' onSubmit={handleSubmit}>
				<Input handleChange={handleChange} todo={todo} />
				<AddButton />
			</form>

			<List>
				{todos.todos &&
					todos.todos.map((todo) => {
						return (
							<ListItem
								key={todo.id}
								todo={todo}
								dispatch={dispatch}
							/>
						)
					})}
			</List>
		</Container>
	)
}

export default Pages
