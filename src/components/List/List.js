import React from 'react'

const List = ({ children }) => {
	return (
		<div id='todo-list' className='mt-10'>
			<ul>{children}</ul>
		</div>
	)
}

export default List
