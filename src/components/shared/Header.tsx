/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import * as React from 'react'
import { makeStyles } from '../styles/theme'

const HeaderLayout = ({ router }: { router: NextRouter }) => {
	const { pathname } = router
	const cs = useStyles()
	return (
		<header>
			<Link href="/">
				<a className={clsx([cs.link, pathname === '/' ? 'is-active' : ''])}>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a className={clsx([cs.link, pathname === '/' ? 'is-active' : ''])}>
					About
				</a>
			</Link>
		</header>
	)
}

const useStyles = makeStyles(style => ({
	link: style.compose(style.mr(3)),
}))

const Header = () => {
	const router = useRouter()
	return <HeaderLayout router={router} />
}

export { Header, HeaderLayout }
