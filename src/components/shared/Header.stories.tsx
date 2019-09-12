import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { HeaderLayout } from './Header'

storiesOf('Header', module).add('default', () => (
	<HeaderLayout router={{ pathname: '/' } as any} />
))
