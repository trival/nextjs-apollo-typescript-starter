export const fontSizeInit = '16px'

export const fontSizeBase = '1rem'
export const fontSizeSmall = '.875rem'
export const fontSizeBig = '1.5rem'
export const fontSizeEmph = '1.25rem'
export const fontSizeH1 = '3rem'
export const fontSizeH2 = '2.25rem'

export const colorWhite = '#fff'
export const colorFontLight = colorWhite
export const colorFontDark = '#222'

export const breakpointLarge = '1024px'
export const breakpointMedium = '640px'

export const theme = {
	space: ['0', '.25rem', '.5rem', '1rem', '2rem', '4rem'],
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
	},
	borders: { basic: 'solid .125rem' },
	breakpoints: [breakpointMedium, breakpointLarge],
	radii: [],
}

export type Theme = typeof theme
