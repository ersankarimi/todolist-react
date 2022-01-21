import React from 'react'
import { buttonClasses } from './Button.classes'

const Button = (props) => {
	const { text, additionalClass } = props

	return (
		<button
			type='button'
			className={`${buttonClasses} ${additionalClass} `}
		>
			{text ? text : 'undefined'}
		</button>
	)
}

export default Button
