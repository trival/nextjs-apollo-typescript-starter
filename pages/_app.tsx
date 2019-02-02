import App, { Container } from 'next/app'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyle } from '../src/components/styles/GlobalStyle'
import { ThemeProvider } from '../src/components/styles/styled-components'
import { theme } from '../src/components/styles/theme'
import withApolloClient from '../src/lib/with-apollo-client'

interface Props {
	apolloClient: any
}

class MyApp extends App<Props> {
	render() {
		const { Component, pageProps, apolloClient } = this.props
		return (
			<ThemeProvider theme={theme}>
				<Container>
					<GlobalStyle />
					<ApolloProvider client={apolloClient}>
						<Component {...pageProps} />
					</ApolloProvider>
				</Container>
			</ThemeProvider>
		)
	}
}

export default withApolloClient(MyApp)
