import * as React from 'react'
import { Main } from '../src/components/shared/Main'
import { useGlobalStyles } from '../src/components/styles/globalStyle'

export default () => {
	useGlobalStyles()
	return (
		<Main>
			<article>
				<h1>The boilerplate project for nextjs apollo jss</h1>
				<p />
			</article>
		</Main>
	)
}
