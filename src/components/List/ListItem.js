import React from 'react'
import RemoveButton from './../Button/RemoveButton'
import DoneButton from './../Button/DoneButton'
import NotDoneButton from './../Button/NotDoneButton'
import { state } from '../../reducer/state'

const List = () => {
	return (
		<div id='todo-lists'>
			{state.map((todo) => {
				const { todoValue, complete, id } = todo
				return (
					<li
						className='flex my-4 items-center bg-gray-100 p-2'
						key={id}
					>
						<p className='w-full text-gray-700 text-xl'>
							{todoValue}
						</p>
						{complete ? <DoneButton /> : <NotDoneButton />}
						<RemoveButton />
					</li>
				)
			})}
		</div>
	)
}

export default List
