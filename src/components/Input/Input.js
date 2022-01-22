import React from 'react'

const Input = ({ handleChange, todo }) => {
	const handleChangeValue = (e) => {
		handleChange(e.target.value)
	}

	return (
		<input
			type='text'
			className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500 focus:outline-none focus:border-gray-800'
			placeholder='Add Todo'
			value={todo}
			onChange={handleChangeValue}
		/>
	)
}

export default Input
