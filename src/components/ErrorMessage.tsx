import * as React from 'react'
import { Styled } from './styles/Styled'

interface Props {
	message?: string
}

const ErrorMessage: React.FunctionComponent<Props> = ({
	message,
	children,
}) => (
	<Styled
		as="aside"
		p={4}
		bg="tomato"
		color="white"
		css="text-transform: uppercase"
	>
		{message || children}
	</Styled>
)

export { ErrorMessage }
