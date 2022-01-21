import React from 'react'
import Container from './../components/Container/Container'
import AddButton from '../components/Button/AddButton'
import Header from '../components/Header/Header'
import Input from '../components/Input/Input'
import List from '../components/List/List'
import Form from './Form'

const Pages = () => {
	return (
		<Container>
			<Header />
			<Form>
				<Input />
				<AddButton />
			</Form>
			<List />
		</Container>
	)
}

export default Pages
