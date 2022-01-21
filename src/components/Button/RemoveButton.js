import React from 'react'
import Button from './Button'

const RemoveButton = () => {
	const classes =
		'text-red-600 border-red-500 hover:text-white hover:bg-red-500 p-2 ml-2'
	const text = 'Remove'
	return <Button text={text} additionalClass={classes} />
}

export default RemoveButton
