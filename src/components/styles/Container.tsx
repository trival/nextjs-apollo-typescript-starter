import * as React from 'react'
import { breakpointLarge, makeStyles } from '../styles/theme'

const useStyles = makeStyles(style => ({
	container: style(style.mx('auto'), style.px([4, 5]), style.py([2, 3]), {
		position: 'relative',
		maxWidth: breakpointLarge,
		textAlign: 'left',
	}),
}))

const Container = ({ children, ...props }: React.PropsWithChildren<any>) => {
	const c = useStyles()
	return (
		<section {...props} className={c.container}>
			{children}
		</section>
	)
}

export { Container }
