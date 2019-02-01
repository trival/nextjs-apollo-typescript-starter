import * as React from 'react'
import { StyledComponentProps } from 'styled-components'
import {
	borderColor,
	BorderColorProps,
	borderRadius,
	BorderRadiusProps,
	borders,
	BordersProps,
	color,
	ColorProps,
	fontSize,
	FontSizeProps,
	space,
	SpaceProps,
	width,
	WidthProps,
} from 'styled-system'
import { styled } from './styled-components'

type ThemeProps = any
type OtherProps = any
type AttrProps = any

export type StyledProps<
	EL extends keyof JSX.IntrinsicElements | React.ComponentType<any> = 'div'
> = StyledComponentProps<EL, ThemeProps, OtherProps, AttrProps> &
	SpaceProps &
	WidthProps &
	FontSizeProps &
	ColorProps &
	BordersProps &
	BorderRadiusProps &
	BorderColorProps

const Styled: React.FunctionComponent<StyledProps> = styled.div`
	${space}
	${width}
	${fontSize}
	${color}
	${borders}
	${borderColor}
	${borderRadius}
`

export { Styled }
