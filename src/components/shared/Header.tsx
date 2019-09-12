import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import * as React from 'react'

const HeaderLayout = ({ router }: { router: NextRouter }) => {
	const { pathname } = router
	return (
		<header>
			<Link href="/">
				<a className={pathname === '/' ? 'is-active' : ''}>Home</a>
			</Link>
			<Link href="/about">
				<a className={pathname === '/about' ? 'is-active' : ''}>About</a>
			</Link>
		</header>
	)
}
const Header = () => {
	const router = useRouter()
	return <HeaderLayout router={router}></HeaderLayout>
}

export { Header, HeaderLayout }
