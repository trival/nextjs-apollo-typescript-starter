import * as React from 'react'
import { Container } from '../styles/Container'
import { Header } from './Header'

const Main: React.FunctionComponent = ({ children }) => (
	<main>
		<Container>
			<Header />
			{children}
		</Container>
	</main>
)

export { Main }
