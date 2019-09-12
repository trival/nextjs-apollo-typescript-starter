import { QueryResult } from '@apollo/react-common'
import * as React from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { Container } from '../styles/Container'
import { LoadingAnimation } from './LoadingAnimation'

export function pageQueryContent<T>(
	Component: React.FunctionComponent<QueryResult<T>>,
	errorMessage = 'Could not load content.',
) {
	return (result: QueryResult<T>) => {
		const { error, loading } = result
		if (error) {
			console.error(error)
			return (
				<Container>
					<ErrorMessage>{errorMessage}</ErrorMessage>
				</Container>
			)
		}
		if (loading) {
			return (
				<Container>
					<LoadingAnimation m={3} />
				</Container>
			)
		}
		return <Component {...result} />
	}
}
