import { normalize } from 'polished'
import { createGlobalStyle } from './styled-components'

const GlobalStyle = createGlobalStyle`
	${normalize()}

	html {
		box-sizing: border-box;
		font-size: ${p => p.theme.fontSizes.init};
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		color: ${p => p.theme.colors.fontLight};
		background: tomato;
		font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
		text-align: center;
	}

	h1 {
		font-size: ${p => p.theme.fontSizes.h1};
	}
	h2 {
		font-size: ${p => p.theme.fontSizes.h2};
	}
	h3 {
		font-size: ${p => p.theme.fontSizes.h3};
	}
	h4 {
		font-size: ${p => p.theme.fontSizes.h4};
	}
	h5 {
		font-size: ${p => p.theme.fontSizes.h5};
	}
	h6 {
		font-size: ${p => p.theme.fontSizes.h6};
	}
`

export { GlobalStyle }
