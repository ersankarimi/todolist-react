import React from 'react'

const NotDoneButton = ({ handleNotDone }) => {
	return (
		<button
			type='button'
			className='flex-no-shrink p-2 border-2 rounded hover:text-white text-gray-600 border-gray-300 hover:bg-gray-500 ml-4 mr-2 min-w-max'
			onClick={handleNotDone}
		>
			Not Done
		</button>
	)
}

export default NotDoneButton
