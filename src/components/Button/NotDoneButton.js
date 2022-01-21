import React from 'react'
import Button from './Button'

const NotDoneButton = () => {
	return (
		<Button
			text='Not Done'
			additionalClass='hover:text-white text-gray-600 border-gray-300 hover:bg-gray-500 p-2 ml-4 mr-2 min-w-max'
		/>
	)
}

export default NotDoneButton
