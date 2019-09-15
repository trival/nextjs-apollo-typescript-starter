import clsx from 'clsx'
import { hideVisually } from 'polished'
import * as React from 'react'
import { makeStyles } from '../styles/theme'

const useStyles = makeStyles({
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

	container: {
		width: '70px',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		animation: '$fadeIn 2s',
	},

	bounce: {
		display: 'inline-block',
		width: '0.75rem',
		height: '0.75rem',
		margin: '0.25rem',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		animation: '$bounce 1.4s infinite ease-in-out both',
	},

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

const LoadingAnimation = (props: { className?: string }) => {
	const cs = useStyles()
	return (
		<div className={clsx(cs.container, props.className)}>
			<div className={cs.bounce1} />
			<div className={cs.bounce2} />
			<div className={cs.bounce} />
			<span className={cs.loading}>loading...</span>
		</div>
	)
}

export { LoadingAnimation }
