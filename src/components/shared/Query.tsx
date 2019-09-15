import { QueryResult } from '@apollo/react-common'
import * as React from 'react'
import { ErrorMessage } from '../ErrorMessage'
import { Container } from '../styles/Container'
import { LoadingAnimation } from './LoadingAnimation'

interface Options {
	errorMessage?: string
	nullOnloading?: boolean
}

export function isQueryLoading(
	result: QueryResult,
	{
		errorMessage = 'Could not load content.',
		nullOnloading = false,
	}: Options = {},
) {
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
		if (nullOnloading) {
			return <>{null}</>
		}
		return (
			<Container>
				<LoadingAnimation />
			</Container>
		)
	}
	return false
}
