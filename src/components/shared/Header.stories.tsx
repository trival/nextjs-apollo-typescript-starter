import * as React from 'react'
import { HeaderLayout } from './Header'

export default {
	title: 'Header',
	component: HeaderLayout,
}

export const basic = () => <HeaderLayout router={{ pathname: '/' } as any} />
