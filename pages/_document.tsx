import Document from 'next/document'
import * as React from 'react'
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss'

export default class MyDocument extends Document<any> {
	static async getInitialProps(ctx: any) {
		const registry = new SheetsRegistry()
		const generateId = createGenerateId()
		const originalRenderPage = ctx.renderPage
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) => (props: any) => (
					<JssProvider registry={registry} generateId={generateId}>
						<App {...props} />
					</JssProvider>
				),
			})

		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			styles: (
				<React.Fragment key="styles">
					{initialProps.styles}
					<style id="server-side-styles">{registry.toString()}</style>
				</React.Fragment>
			),
		}
	}
}
