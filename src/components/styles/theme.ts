import { makeStyleHelpers } from './system'

export const fontSizeInit = '16px'

export const fontSizeBase = '1rem'
export const fontSizeSmall = '.875rem'
export const fontSizeBig = '1.4rem'
export const fontSizeEmph = '1.2rem'
export const fontSizeH1 = '2.5rem'
export const fontSizeH2 = '2rem'

export const colorWhite = '#fff'
export const colorGray = '#677'
export const colorFontLight = colorWhite
export const colorFontDark = '#222'

export const breakpointLarge = '1200px'
export const breakpointMedium = '920px'
export const breakpointSmall = '640px'

export const lineHight = 1.4

export const themeObject = {
	spacing: ['0', '.25rem', '.5rem', '1rem', '2rem', '4rem'],
	fontSizes: {
		init: fontSizeInit,
		base: fontSizeBase,
		small: fontSizeSmall,
		emph: fontSizeEmph,
		big: fontSizeBig,
		h1: fontSizeH1,
		h2: fontSizeH2,
		h3: fontSizeBig,
		h4: fontSizeEmph,
		h5: fontSizeBase,
		h6: fontSizeSmall,
	},
	colors: {
		fontLight: colorFontLight,
		fontDark: colorFontDark,
		white: colorWhite,
		gray: colorGray,
	},
	borders: { basic: 'solid .125rem' },
	breakpoints: [breakpointSmall, breakpointMedium, breakpointLarge],
	radii: { pill: '9999px' },
	textStyles: {
		active: {
			fontSize: fontSizeBig,
			textTransform: 'uppercase',
		},
	},
}

export const theme = Object.assign(
	makeStyleHelpers({
		spacing: themeObject.spacing,
		breakpoints: themeObject.breakpoints,
	}),
	themeObject,
)

export type Theme = typeof theme
