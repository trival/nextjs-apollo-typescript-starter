import {
	makeSpaceHelpers,
	makeStyleHelpers,
	SpaceHelpers,
	StyleHelpers,
} from './system'

describe('style system', () => {
	describe('makeSpaceHelpers', () => {
		let helpers: SpaceHelpers
		const spacing = [0, '1px', '2px', '3px']
		const breakpoints = ['20em', '40em', '60em']

		beforeEach(() => {
			helpers = makeSpaceHelpers({ spacing, breakpoints })
		})

		describe('margin', () => {
			it('picks margins from defined spacing', () => {
				expect(helpers.m(0)).toMatchInlineSnapshot(`
			Object {
			  "margin": 0,
			}
		`)
				expect(helpers.m(1)).toMatchInlineSnapshot(`
			Object {
			  "margin": "1px",
			}
		`)
				expect(helpers.m(2)).toMatchInlineSnapshot(`
			Object {
			  "margin": "2px",
			}
		`)
				expect(helpers.m(3)).toMatchInlineSnapshot(`
			Object {
			  "margin": "3px",
			}
		`)
				expect(helpers.m(4)).toMatchInlineSnapshot(`
			Object {
			  "margin": 4,
			}
		`)
				expect(helpers.m('not in spaces')).toMatchInlineSnapshot(`
			Object {
			  "margin": "not in spaces",
			}
		`)
			})

			it('can get responsive arrays', () => {
				const style = helpers.m([1, 2, 3])
				expect(style).toEqual({
					margin: '1px',
					'@media screen and (minWidth: 20em)': {
						margin: '2px',
					},
					'@media screen and (minWidth: 40em)': {
						margin: '3px',
					},
				})
			})
		})

		it('generates space helpers for margin, padding, and positionsing', () => {
			expect(helpers.m(2)).toMatchInlineSnapshot(`
			Object {
			  "margin": "2px",
			}
		`)
			expect(helpers.mt(2)).toMatchInlineSnapshot(`
			Object {
			  "marginTop": "2px",
			}
		`)
			expect(helpers.mb(2)).toMatchInlineSnapshot(`
			Object {
			  "marginBottom": "2px",
			}
		`)
			expect(helpers.ml(2)).toMatchInlineSnapshot(`
			Object {
			  "marginLeft": "2px",
			}
		`)
			expect(helpers.mr(2)).toMatchInlineSnapshot(`
			Object {
			  "marginRight": "2px",
			}
		`)
			expect(helpers.mx(2)).toMatchInlineSnapshot(`
			Object {
			  "marginLeft": "2px",
			  "marginRight": "2px",
			}
		`)
			expect(helpers.my(2)).toMatchInlineSnapshot(`
			Object {
			  "marginBottom": "2px",
			  "marginTop": "2px",
			}
		`)
			expect(helpers.p(2)).toMatchInlineSnapshot(`
			Object {
			  "padding": "2px",
			}
		`)
			expect(helpers.pt(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingTop": "2px",
			}
		`)
			expect(helpers.pb(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingBottom": "2px",
			}
		`)
			expect(helpers.pl(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingLeft": "2px",
			}
		`)
			expect(helpers.pr(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingRight": "2px",
			}
		`)
			expect(helpers.px(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingLeft": "2px",
			  "paddingRight": "2px",
			}
		`)
			expect(helpers.py(2)).toMatchInlineSnapshot(`
			Object {
			  "paddingBottom": "2px",
			  "paddingTop": "2px",
			}
		`)
			expect(helpers.t(2)).toMatchInlineSnapshot(`
			Object {
			  "top": "2px",
			}
		`)
			expect(helpers.b(2)).toMatchInlineSnapshot(`
			Object {
			  "bottom": "2px",
			}
		`)
			expect(helpers.l(2)).toMatchInlineSnapshot(`
			Object {
			  "left": "2px",
			}
		`)
			expect(helpers.r(2)).toMatchInlineSnapshot(`
			Object {
			  "right": "2px",
			}
		`)
		})
	})

	describe('makeStyleHelpers', () => {
		let styles: StyleHelpers
		const spacing = [0, '1px', '2px', '3px']
		const breakpoints = ['20em', '40em', '60em']

		beforeEach(() => {
			styles = makeStyleHelpers({ spacing, breakpoints })
		})

		it('create the helper object', () => {
			expect(typeof styles).toBe('function')
			expect(typeof styles.m).toBe('function')
			expect(typeof styles.px).toBe('function')
			expect(typeof styles.t).toBe('function')
		})

		it('composes responsive styles', () => {
			const $ = styles
			const styleObj = $($.m([1, 2, 3]), $.p([1, 2, 3]), $.t([1, 2, 3]))
			expect(styleObj).toMatchObject({
				top: '1px',
				margin: '1px',
				padding: '1px',
				'@media screen and (minWidth: 20em)': {
					top: '2px',
					margin: '2px',
					padding: '2px',
				},
				'@media screen and (minWidth: 40em)': {
					top: '3px',
					margin: '3px',
					padding: '3px',
				},
			})
		})
	})
})
