import { addDecorator } from '@storybook/react'
import NextRouter from 'next/router'
import { action } from '@storybook/addon-actions'
import { GlobalStyles } from '../src/components/styles/GlobalStyle'
import * as React from 'react'
import { theme } from '../src/components/styles/theme'
import { ThemeProvider } from 'react-jss'

// ===== general setup =====

// mock Nextjs Router
const mockedRouter = {
	push: action('NextjsRouter: push'),
	prefetch: action('NextjsRouter: prefetch'),
	events: { on: () => {}, off: () => {}, emit: () => {} },
	query: {},
	replace: (...args) => {
		action('NextjsRouter: replace')(...args)
		return Promise.resolve()
	},
}
NextRouter.router = mockedRouter

// ===== add decoratore =====

// add global styles and theme
addDecorator(story => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{story()}
	</ThemeProvider>
))
