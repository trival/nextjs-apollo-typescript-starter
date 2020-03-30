import * as React from 'react'
import { ErrorMessage } from './ErrorMessage'

export default {
	title: 'ErrorMessage',
	component: ErrorMessage,
}

export const basic = () => <ErrorMessage>Very Bad Error</ErrorMessage>
