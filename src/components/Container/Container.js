import React from 'react'
import { containerClasses } from './Container.classes'

const Container = ({ children }) => {
	return <div className={containerClasses}>{children}</div>
}

export default Container
