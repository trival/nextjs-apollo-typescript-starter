import createStyles from '@material-ui/styles/createStyles'
import { StylesHook } from '@material-ui/styles/makeStyles'
import {
	CSSProperties,
	Styles,
	WithStylesOptions,
} from '@material-ui/styles/withStyles'
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'

type S = number | string

function merge(a: any, b: any) {
	const result = Object.assign({}, a, b)
	for (const key in b) {
		if (!a[key] || typeof b[key] !== 'object') continue
		result[key] = Object.assign(a[key], b[key])
	}
	return result
}

function compose(...args: CSSProperties[]): CSSProperties {
	return args.reduce(merge, {})
}

interface SpaceConfig {
	spacing: S[]
	breakpoints: S[]
}

function atBreakpoint(s: S) {
	return `@media screen and (minWidth: ${s})`
}

export function makeSpaceHelpers(config: SpaceConfig) {
	const m = makeStyleFn('margin')
	const mt = makeStyleFn('marginTop')
	const mb = makeStyleFn('marginBottom')
	const mr = makeStyleFn('marginRight')
	const ml = makeStyleFn('marginLeft')
	const my = makeStyleFn(['marginTop', 'marginBottom'])
	const mx = makeStyleFn(['marginRight', 'marginLeft'])
	const p = makeStyleFn('padding')
	const pt = makeStyleFn('paddingTop')
	const pb = makeStyleFn('paddingBottom')
	const pr = makeStyleFn('paddingRight')
	const pl = makeStyleFn('paddingLeft')
	const py = makeStyleFn(['paddingTop', 'paddingBottom'])
	const px = makeStyleFn(['paddingRight', 'paddingLeft'])
	const t = makeStyleFn('top')
	const b = makeStyleFn('bottom')
	const r = makeStyleFn('right')
	const l = makeStyleFn('left')

	return {
		m,
		mt,
		mb,
		ml,
		mr,
		mx,
		my,
		p,
		pt,
		pb,
		pl,
		pr,
		px,
		py,
		t,
		b,
		l,
		r,
	} as const

	function makeStyleFn(keys: string | string[]) {
		const ks = Array.isArray(keys) ? keys : [keys]

		return (styleVal: S | [S, ...Array<S | null | undefined>]) => {
			if (Array.isArray(styleVal)) {
				const [firstVal, ...restVals] = styleVal

				let result = makeStyleObject(ks, firstVal)
				result = restVals.reduce((result, styleVal, i) => {
					if (styleVal != null) {
						result = merge(result, {
							[atBreakpoint(config.breakpoints[i])]: makeStyleObject(
								ks,
								styleVal,
							),
						})
					}
					return result
				}, result)

				return result
			} else {
				return makeStyleObject(ks, styleVal)
			}
		}
	}

	function makeStyleObject(keys: string[], styleVal: S) {
		return compose(
			...keys.map(key => ({
				[key]: get(styleVal),
			})),
		)
	}

	function get(n: S) {
		return config.spacing[n as any] || n
	}
}

type MakeStyles<T, Props extends {} = {}, ClassKey extends string = string> = (
	styles: Styles<T, Props, ClassKey>,
	options?: Omit<WithStylesOptions<T>, 'withTheme'>,
) => StylesHook<Styles<T, Props, ClassKey>>

export function makeStyleTheme<ThemeConfig extends SpaceConfig>(
	themeConfig: ThemeConfig,
) {
	const theme = Object.assign(
		compose,
		{ compose },
		makeSpaceHelpers(themeConfig),
		themeConfig,
	)
	const makeStyles = createUseStyles as MakeStyles<typeof theme>
	return { theme, makeStyles }
}

export type SpaceHelpers = ReturnType<typeof makeSpaceHelpers>
export type ThemeHelpers = ReturnType<typeof makeStyleTheme>

export { createStyles, ThemeProvider, useTheme }
