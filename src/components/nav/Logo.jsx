import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
	position: fixed;
	top: 24px;
	left: 24px;
	font-size: 36px;
	font-weight: 700;
	margin: 0;
  color: #0042ff !important;
	
	.dark & {
  	color: white !important;
	}
	
	.dark &:hover {
		color: #0042ff !important;
	}
`

export default function Logo (props){

	return (
		<Title to="/">
			<div>NIL</div>
			<div>WO</div>
			<div>RK</div>
		</Title>
	)
}


