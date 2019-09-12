import * as React from 'react'
import { breakpointLarge } from '../styles/theme'
import { styles } from './system'
import { $ } from './theme'

const useStyles = styles({
	container: $($.mx('auto'), $.px([4, 5]), $.py([2, 3]), {
		position: 'relative',
		maxWidth: breakpointLarge,
		textAlign: 'left',
	}),
})

const Container = ({ children, ...props }: React.PropsWithChildren<any>) => {
	const c = useStyles()
	return (
		<section {...props} className={c.container}>
			{children}
		</section>
	)
}

export { Container }
