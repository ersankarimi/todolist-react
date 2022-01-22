import React from 'react'

const RemoveButton = ({ handleRemoveTodo }) => {
	return (
		<button
			type='button'
			className='flex-no-shrink p-2 border-2 rounded text-red-600 border-red-500 hover:text-white hover:bg-red-500 ml-2'
			onClick={handleRemoveTodo}
		>
			Remove
		</button>
	)
}

export default RemoveButton
