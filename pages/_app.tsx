import { ApolloProvider } from '@apollo/react-hooks'
import App from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { ThemeProvider } from 'react-jss'
import { GlobalStyles } from '../src/components/styles/globalStyle'
import { theme } from '../src/components/styles/theme'
import withApolloClient from '../src/lib/with-apollo-client'

interface Props {
	apolloClient: any
}

class MyApp extends App<Props> {
	componentDidMount() {
		const style = document.getElementById('server-side-styles')

		if (style) {
			style.parentNode!.removeChild(style)
		}
	}

	render() {
		const { Component, pageProps, apolloClient } = (this as any).props
		return (
			<ThemeProvider theme={theme}>
				<ApolloProvider client={apolloClient}>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, shrink-to-fit=no"
						/>
						<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					</Head>
					<GlobalStyles />
					<Component {...pageProps} />
				</ApolloProvider>
			</ThemeProvider>
		)
	}
}

export default withApolloClient(MyApp)
