import * as React from 'react'
import { Container } from '../styles/Container'
import { ThemeProvider } from '../styles/system'
import { theme } from '../styles/theme'
import { Header } from './Header'

const Main: React.FunctionComponent = ({ children }) => (
	<main>
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				{children}
			</Container>
		</ThemeProvider>
	</main>
)

export { Main }
