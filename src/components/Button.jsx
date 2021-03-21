import styled from 'styled-components'

const Button = styled.a`
	appearance: none;
	padding: 15px 40px;
	border: 3px solid white;
	background: transparent;
	font-size: 32px;
	font-weight: bolder;
	color: white !important;
	cursor: pointer;
	position: relative;
  transition: 0.4s;
  margin: 100px auto;
  display: block;
  width: fit-content;
	
	&:focus{
		outline: none;
	}
	
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #222;
		z-index: -1;
		transform: translate(0, 0);
		transition: 0.4s;
	}
	
	&:hover {
    border-color: #0042ff;
		color: #0042ff !important;
		
		&::after{
      background: white;
			transform: translate(10px, 10px);
		}
	}
`

export default Button
