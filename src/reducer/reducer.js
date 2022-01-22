import { ACTIONS } from './actions'
export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		case ACTIONS.REMOVE_TODO:
			return {
				...state,
				todos: [...state.todos].filter(
					(todo) => todo.id !== action.payload.id
				),
			}

		case ACTIONS.TODO_DONE:
		case ACTIONS.TODO_NOT_DONE:
			const anjay = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete }
				}
				return todo
			})
			return { ...state, todos: anjay }

		default:
			return { ...state }
	}
}
