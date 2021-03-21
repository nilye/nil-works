import React from 'react'
import { importAll } from '../util'

const images = importAll(require.context('./', false, /\d+\.webp$/))
const Content = () => images.map(i => (<img key={i} src={i} />))

const hashbeeBranding = {
	id: 'hashbeeBranding',
	title: 'Hashbee Branding',
	thumbnail: require('./thumbnail.webp').default,
	directLink: null,
	content: Content
}

export default hashbeeBranding
