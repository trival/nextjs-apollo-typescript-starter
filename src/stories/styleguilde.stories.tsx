import * as React from 'react'

import { Container } from '../components/styles/Container'

const box = { borderColor: 'white', border: 'basic' }

export default {
	title: 'Styleguide',
}

export const typography = () => (
	<Container>
		<h1>Headline h1</h1>
		<h2>Headline h2</h2>
		<h3>Headline h3</h3>
		<h4>Headline h4</h4>
		<h5>Headline h5</h5>
		<h6>Headline h6</h6>
		<p>This is a paragraph. A quick brown fox jumps over the lazy dog.</p>

		<p>
			Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht,
			nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen,
			in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein
			triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender
			körperlicher Betätigung, außer um Vorteile daraus zu ziehen?
		</p>

		<p>
			Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die
			Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen
			Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus
			resultierende Freude nach sich zieht? Auch gibt es niemanden, der den
			Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es
			sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm
			große Freude bereiten können.
		</p>

		<p>
			Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je
			anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen?
			Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die
			Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen
			Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus
			resultierende Freude nach sich zieht? Auch gibt es niemanden, der den
			Schmerz an sich liebt, sucht oder wünscht, nur,
		</p>
	</Container>
)
