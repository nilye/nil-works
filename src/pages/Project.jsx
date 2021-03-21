import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router'
import Works from '../works'


const Container = styled.div`
	max-width: 1000px;
	margin: 24px auto;
	
	& > * {
		margin: 24px 0;
    width: 100%;
	}
	
	@media (max-width: 960px) {
    margin: 24px;
		& > * {
      margin: 12px 0;
		}
	}
  @media (max-width: 600px) {
    margin: 8px;
    & > * {
      margin: 4px 0;
    }
  }
`

function ProjectPg (){
	const { search } = useLocation()
	const id = new URLSearchParams(search).get('id')

	const work = Works.find(i => i.id === id)

	if (!work){
		const history = useHistory()
		history.replace('/')
	}

	useEffect(() => {
		document.body.classList.value = 'dark'
	}, [])

	return (
		<Container>
			{ work.content() }
		</Container>
	)
}

export default ProjectPg
