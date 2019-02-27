import * as React from 'react'
import { Styled, StyledProps } from '../styles/Styled'
import { breakpointLarge } from '../styles/theme'

const Container: React.FunctionComponent<StyledProps> = ({
	children,
	...props
}) => (
	<Styled
		as="section"
		textAlign="left"
		mr="auto"
		ml="auto"
		px={[4, 5]}
		py={[2, 3]}
		css={`
			position: relative;
			max-width: ${breakpointLarge};
		`}
		{...props}
	>
		{children}
	</Styled>
)

export { Container }
