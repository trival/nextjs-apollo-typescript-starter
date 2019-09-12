import { hideVisually } from 'polished'
import * as React from 'react'
import { styles } from '../styles/system'

const useStyles = styles({
	'@keyframes bounce': {
		'0%, 80%, 100%': { transform: 'scale(0)' },
		'40%': { transform: 'scale(1.0)' },
	},

	'@keyframes fadeIn': {
		'0%, 40%': {
			opacity: 0,
		},
		'100%': {
			opacity: 1,
		},
	},

	container: `
		width: 70px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		animation: $fadeIn 2s;
`,
	bounce: `
		display: inline-block;
		width: 0.75rem;
		height: 0.75rem;
		margin: 0.25rem;
		background-color: rgba(255, 255, 255, 0.8);
		animation: $bounce 1.4s infinite ease-in-out both;
	`,
	bounce1: {
		composes: '$bounce',
		animationDelay: '-0.32s',
	},
	bounce2: {
		composes: '$bounce',
		animationDelay: '-0.16s',
	},
	loading: hideVisually(),
})

const LoadingAnimation = (props: any) => {
	const cs = useStyles()
	return (
		<div {...props} className={cs.container}>
			<div className={cs.bounce1} />
			<div className={cs.bounce2} />
			<div className={cs.bounce} />
			<span className={cs.loading}>loading...</span>
		</div>
	)
}

export { LoadingAnimation }
