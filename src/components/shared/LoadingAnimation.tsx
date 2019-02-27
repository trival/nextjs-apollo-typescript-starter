import { hideVisually } from 'polished'
import * as React from 'react'
import { keyframes } from 'styled-components'
import { Styled, StyledProps } from '../styles/Styled'

const bounce = keyframes`
	0%, 80%, 100% {
		transform: scale(0);
	} 40% {
		transform: scale(1.0);
	}
`

const fadeIn = keyframes`
	0%, 40% {
		opacity: 0
	} 100% {
		opacity: 1
	}
`

const LoadingAnimation: React.FunctionComponent<StyledProps> = props => (
	<Styled
		{...props}
		css={`
			width: 70px;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			animation: ${fadeIn} 2s;

			div {
				display: inline-block;
				width: 0.75rem;
				height: 0.75rem;
				margin: 0.25rem;
				background-color: rgba(255, 255, 255, 0.8);
				animation: ${bounce} 1.4s infinite ease-in-out both;
			}

			.bounce1 {
				animation-delay: -0.32s;
			}

			.bounce2 {
				animation-delay: -0.16s;
			}
		`}
	>
		<div className="bounce1" />
		<div className="bounce2" />
		<div className="bounce3" />
		<Styled
			as="span"
			css={`
				${hideVisually}
			`}
		>
			loading...
		</Styled>
	</Styled>
)

export { LoadingAnimation }
