import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import VanillaTilt from 'vanilla-tilt'
import { Link } from 'react-router-dom'

const ThumbnailWrap = styled(Link)`
  position:absolute;
  cursor: pointer;
  width:300px;
  height:300px;
  border-radius:50%;
  background: #dfdfdf;
	box-shadow: 0 5px 30px -10px rgb(0,0,0 , 0.05), 0 15px 60px 0 rgb(0, 0, 0, 0.2);
  &:hover ._title {
    opacity: 1;
  }
`

const ThumbnailAnchor = styled(ThumbnailWrap)``

const ThumbnailImg = styled.img`
  border-radius:50%;
	width: 100%;
	height: 100%;
`

const ThumbnailTitle = styled.div`
  position: absolute;
	top:calc( 100% + 18px );
	opacity: 0;
	font-weight: bolder;
	transition: 0.2s;
	width: 100%;
	text-align: center;
  color: #0042ff !important;
`

/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function ThumbnailWrapper (props){

	const { work, radius, gap, index, children } = props
	const [ pos, setPos] = useState({
		left: null,
		top: null
	})

	/**
	 * tilt
	 */
	const ref = useRef()
	useEffect(() => {
		VanillaTilt.init(ref.current, {
			max: 30,
			scale: 1.1,
			speed: 300,
			transition: true,
			easing: 'cubic-bezier(0,0,.5,1)'
		})
	}, [])

	/**
	 * position
	 */
	useEffect(() => {
		const offset = (radius + gap)*0.5*Math.sqrt(3)-radius
		if ( index % 2 === 0){
			setPos({
				right: offset + 'px',
				top: (index + 0.5) * (radius + gap) + 'px'
			})
		} else {
			setPos({
				left: offset + 'px',
				top: (index + 0.5) * (radius + gap) + 'px'
			})
		}
	}, [radius, gap, index])

	const commonProps = {
		style: {
			width: radius * 2 + 'px',
			height: radius * 2 + 'px',
			...pos
		},
		ref: ref
	}

	if (work.directLink){
		return (
			<ThumbnailAnchor
				as='a'
				href={ work.directLink }
				target='_blank'
				{...commonProps}
			>{ children }</ThumbnailAnchor>
		)
	}

	return (
		<ThumbnailWrap
			to={ '/proj?id=' + work.id }
			{...commonProps}
		>{ children }</ThumbnailWrap>
	)

}


export default function Thumbnail(props){
	const { work } = props
	return <ThumbnailWrapper {...props} >
		<ThumbnailImg src={ work.thumbnail } />
		<ThumbnailTitle className='_title'>{ work.title }</ThumbnailTitle>
	</ThumbnailWrapper>
}
