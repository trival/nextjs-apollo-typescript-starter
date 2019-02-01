import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ErrorMessage } from './ErrorMessage'

storiesOf('ErrorMessage', module).add('basic', () => (
	<ErrorMessage>Very Bad Error</ErrorMessage>
))
