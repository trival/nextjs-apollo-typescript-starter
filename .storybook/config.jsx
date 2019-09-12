import { configure, addDecorator } from '@storybook/react'
// @ts-ignore
import NextRouter from 'next/router'
import { action } from '@storybook/addon-actions'
import { useGlobalStyles } from '../src/components/styles/globalStyle'
import * as React from 'react'
import { theme } from '../src/components/styles/theme'

// ===== general setup =====

// mock Nextjs Router
const mockedRouter = {
	push: action('NextjsRouter: push'),
	prefetch: action('NextjsRouter: prefetch'),
}
NextRouter.router = mockedRouter

// ===== add decoratore =====

const Story = ({ story }) => {
	useGlobalStyles(theme)
	return <>{story()}</>
}

// add global styles and theme
addDecorator(story => {
	return <Story story={story} />
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
