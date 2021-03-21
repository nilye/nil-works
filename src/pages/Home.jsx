import React, { useEffect } from 'react'
import MainLayout from '../components/main/Layout'
import Works from '../works'

function HomePg () {

	useEffect(() => {
		document.body.classList.value = 'light'
	}, [])

	return (
		<MainLayout works={Works}></MainLayout>
	)
}

export default HomePg
