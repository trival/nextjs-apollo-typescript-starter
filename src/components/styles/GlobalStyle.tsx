import { normalize } from 'polished'
import { styles } from './system'
import { $, theme } from './theme'

export const useGlobalStyles = styles({
	'@global': $(...normalize(), {
		body: {
			color: theme.colors.fontLight,
			fontFamily:
				"-apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
			textAlign: 'center',
			backgroundColor: theme.colors.gray,
			transition: 'background-color 0.5s',
		},

		html: {
			boxSizing: 'border-box',
			fontSize: theme.fontSizes.init,
		},

		'*, *:before, *:after': {
			boxSizing: 'inherit',
		},

		h1: {
			fontSize: theme.fontSizes.h1,
		},
		h2: {
			fontSize: theme.fontSizes.h2,
		},
		h3: {
			fontSize: theme.fontSizes.h3,
		},
		h4: {
			fontSize: theme.fontSizes.h4,
		},
		h5: {
			fontSize: theme.fontSizes.h5,
		},
		h6: {
			fontSize: theme.fontSizes.h6,
		},

		a: {
			color: theme.colors.fontLight,
		},

		img: {
			width: '100%',
			verticalAlign: 'bottom',
		},
	}),
})

export const GlobalStyles = () => {
	useGlobalStyles()
	return null
}
