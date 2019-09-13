import * as React from 'react'
import { makeStyles } from './styles/theme'

interface Props {
	message?: string
}

const useStyles = makeStyles(style => ({
	msg: style.compose(
		style.p(4),
		{
			backgroundColor: 'tomato',
			color: 'white',
			textTransform: 'uppercase',
		},
	),
}))

const ErrorMessage: React.FunctionComponent<Props> = ({
	message,
	children,
}) => {
	const c = useStyles()
	return <aside className={c.msg}>{message || children}</aside>
}

export { ErrorMessage }
