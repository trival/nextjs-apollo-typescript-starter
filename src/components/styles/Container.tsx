import * as React from 'react'
import { Styled, StyledProps } from './Styled'
import { breakpointLarge } from './theme'

const Container: React.FunctionComponent<StyledProps> = ({
	children,
	...props
}) => (
	<Styled
		as="section"
		css={`
			max-width: ${breakpointLarge};
			margin-left: auto;
			margin-right: auto;
			text-align: left;
		`}
		{...props}
	>
		{children}
	</Styled>
)

export { Container }
