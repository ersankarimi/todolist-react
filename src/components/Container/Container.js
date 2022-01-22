import React from 'react'

const Container = ({ children }) => {
	return (
		<div className='bg-white rounded shadow p-6 mt-4 w-full'>
			{children}
		</div>
	)
}

export default Container
