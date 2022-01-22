import React from 'react'

const DoneButton = ({ handleDone }) => {
	return (
		<button
			type='button'
			className='flex-no-shrink p-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500 ml-4 mr-2'
			onClick={handleDone}
		>
			Done
		</button>
	)
}

export default DoneButton
