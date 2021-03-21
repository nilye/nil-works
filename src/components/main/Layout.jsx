import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const ScrollWrap = styled.div`
	position: relative;
	width: 0;
	margin: 0 auto;
`

const ResponsiveRadius = [
	[1440, 160],
	[960, 132],
	[600, 80],
	[0, 64]
]

export default function MainLayout(props){

	const { works } = props
	const [radius, setRadius] = useState(160)
	const [gap, setGap] = useState(80)

	function updateSize() {
		const winWidth = window.innerWidth
		const r = ResponsiveRadius.find(i => winWidth >= i[0])[1]
		setRadius(r)
		const g = (winWidth <= ResponsiveRadius[2][0]) ? r/3 : r/2
		setGap(g)
	}

	useEffect(() => {
		updateSize()
		window.addEventListener('resize', updateSize)
	}, [])


	function genThumbnail (){
		return works.map((item, index) => (
			<Thumbnail
				radius={radius}
				gap={gap}
				key={index}
				work={item}
				index={index}>
			</Thumbnail>
		))
	}

	return (
		<ScrollWrap style={{
			height: (works.length + 1.5) * (radius + gap)
		}}>
			{ genThumbnail() }
		</ScrollWrap>
	)
}
