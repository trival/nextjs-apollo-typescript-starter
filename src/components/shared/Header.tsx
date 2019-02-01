import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import * as React from 'react'

const HeaderLayout: React.FunctionComponent<WithRouterProps> = ({ router }) => {
	const pathname = router && router.pathname
	return (
		<header>
			<Link prefetch href="/">
				<a className={pathname === '/' ? 'is-active' : ''}>Home</a>
			</Link>
			<Link prefetch href="/about">
				<a className={pathname === '/about' ? 'is-active' : ''}>About</a>
			</Link>
		</header>
	)
}

const Header = withRouter(HeaderLayout)

export { Header, HeaderLayout }
