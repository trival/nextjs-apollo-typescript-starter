import { configure, addDecorator } from '@storybook/react'
import NextRouter from 'next/router'
import { action } from '@storybook/addon-actions'
import { GlobalStyles } from '../src/components/styles/GlobalStyle'
import * as React from 'react'
import { theme } from '../src/components/styles/theme'
import { useTheme, ThemeProvider } from '../src/components/styles/system'

// ===== general setup =====

// mock Nextjs Router
const mockedRouter = {
	push: action('NextjsRouter: push'),
	prefetch: action('NextjsRouter: prefetch'),
}
NextRouter.router = mockedRouter

// ===== add decoratore =====

const Story = ({ story }) => {
	const useThemeTheme = useTheme()
	console.log('useTheme', useThemeTheme)
	console.log('globalTheme', theme)
	return (
		<>
			<GlobalStyles />
			{story()}
		</>
	)
}

const Provider = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

// add global styles and theme
addDecorator(story => {
	return (
		<Provider>
			<Story story={story} />
		</Provider>
	)
})

// ===== load stories =====

// automatically import all files ending in *.stories.js
const compReq = require.context(
	'../src/components',
	true,
	/\.stories\.(j|t)sx?$/,
)
const pageReq = require.context('../pages', true, /\.stories\.(j|t)sx?$/)
const storyReq = require.context('../src/stories', true, /\.stories\.(j|t)sx?$/)

function loadStories() {
	compReq.keys().forEach(filename => compReq(filename))
	pageReq.keys().forEach(filename => pageReq(filename))
	storyReq.keys().forEach(filename => storyReq(filename))
}

configure(loadStories, module)
