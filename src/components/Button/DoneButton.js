import React from 'react'
import Button from './Button'

const DoneButton = () => {
	return (
		<Button
			text='Done'
			additionalClass='hover:text-white text-green-500 border-green-500 hover:bg-green-500 p-2 ml-4 mr-2'
		/>
	)
}

export default DoneButton
