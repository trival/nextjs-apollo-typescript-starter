import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import * as React from 'react'

export default (App: any) => {
	return class Apollo extends React.Component<any> {
		static displayName = 'withApollo(App)'

		static async getInitialProps(ctx: any) {
			const { AppTree } = ctx

			// Run all GraphQL queries in the component tree
			// and extract the resulting data
			const staticApolloClient = initApolloClient()

			let appProps = {}
			if (App.getInitialProps) {
				appProps = await App.getInitialProps(ctx)
				ctx.apolloClient = staticApolloClient
			}

			// tslint:disable-next-line: strict-type-predicates
			if (typeof window === 'undefined') {
				// When redirecting, the response is finished.
				// No point in continuing to render
				if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
					return appProps
				}

				try {
					// Run all GraphQL queries
					const { getDataFromTree } = await import('@apollo/react-ssr')
					await getDataFromTree(
						<AppTree {...appProps} apolloClient={staticApolloClient} />,
					)
				} catch (error) {
					// Prevent Apollo Client GraphQL errors from crashing SSR.
					// Handle them in components via the data.error prop:
					// https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
					console.error('Error while running `getDataFromTree`', error)
				}

				// getDataFromTree does not call componentWillUnmount
				// head side effect therefore need to be cleared manually
				Head.rewind()
			}

			// Extract query data from the Apollo store
			const apolloState = staticApolloClient.cache.extract()
			console.log('rendering apollo serverside!!!!!!', apolloState)

			return {
				...appProps,
				apolloState,
			}
		}

		apolloClient: any

		constructor(props: any) {
			super(props)
			this.apolloClient =
				props.apolloClient || initApolloClient(props.apolloState)
		}

		render() {
			return <App apolloClient={this.apolloClient} {...this.props} />
		}
	}
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(initialState = {}) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	// tslint:disable-next-line: strict-type-predicates
	if (typeof window === 'undefined') {
		return createApolloClient(initialState)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = createApolloClient(initialState)
	}

	return apolloClient
}

/**
 * Creates and configures the ApolloClient
 */
function createApolloClient(initialState = {}) {
	// tslint:disable-next-line: strict-type-predicates
	const isServer = typeof window === 'undefined'
	return new ApolloClient({
		ssrMode: isServer, // Disables forceFetch on the server (so queries are only run once)
		link: new HttpLink({
			uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
			fetch,
		}),
		cache: new InMemoryCache({
			freezeResults: process.env.NODE_ENV !== 'production',
		}).restore(initialState),
		assumeImmutableResults: true,
		ssrForceFetchDelay: 20,
	})
}
