import React, { Fragment } from 'react'
import { importAll } from '../util'
import styled from 'styled-components'
import Button from '../../components/Button'

const A = styled.a`
	display: block;
	& > img {
		width: 100%;
	}
`

const images = importAll(require.context('./', false, /\d+\.webp$/))
const Content = () => (
	<Fragment>
		<A href='http://fika.io' target='_blank'>
			<img src={images[0]} />
		</A>
		<div>
			<Button href='http://fika.io' target='_blank'>Visit Fika.io</Button>
		</div>
		{ images.slice(1).map(i => (<img key={i} src={i} />)) }
	</Fragment>
)

const fika = {
	id: 'fika',
	title: 'Fika Reader',
	thumbnail: require('./thumbnail.webp').default,
	directLink: null,
	content: Content
}

export default fika
