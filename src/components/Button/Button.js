import React from 'react'

const Button = (props) => {
	const { text, additionalClass } = props

	return (
		<button
			type='button'
			className={`flex-no-shrink p-2 border-2 rounded ${additionalClass} `}
		>
			{text ? text : 'undefined'}
		</button>
	)
}

export default Button
