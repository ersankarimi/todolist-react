import { ACTIONS } from './actions'
export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return
		case ACTIONS.REMOVE_TODO:
			return
		case ACTIONS.TODO_DONE:
			return
		case ACTIONS.TODO_NOT_DONE:
			return

		default:
			return { ...state }
	}
}
