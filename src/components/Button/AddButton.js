import React from 'react'
import Button from './Button'

const AddButton = () => {
	return (
		<Button
			text='Add'
			additionalClass='flex-no-shrink p-2 ml-4 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500'
		/>
	)
}

export default AddButton
