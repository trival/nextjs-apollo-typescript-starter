import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { apiUrl } from './config'

let apolloClient: any = null

// Polyfill fetch() on the server (used by apollo-client)
if (!(process as any).browser) {
	;(global as any).fetch = fetch
}

function create(initialState: any) {
	// Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
	return new ApolloClient({
		connectToDevTools: (process as any).browser,
		ssrMode: !(process as any).browser, // Disables forceFetch on the server (so queries are only run once)
		link: new HttpLink({
			uri: apiUrl, // Server URL (must be absolute)
			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
		}),
		cache: new InMemoryCache().restore(initialState || {}),
	})
}

export default function initApollo(initialState?: any) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!(process as any).browser) {
		return create(initialState)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState)
	}

	return apolloClient
}
