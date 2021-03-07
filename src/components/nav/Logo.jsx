import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.h1`
	font-weight: 700;
	margin: 0;
`

function Logo (props){

	return (
		<Link to="/">
			<Title>NIL</Title>
			<Title>WO</Title>
			<Title>RK</Title>
		</Link>
	)
}

export default Logo

