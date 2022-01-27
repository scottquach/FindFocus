
// import 'styles.css'
import styled from 'styled-components';
import './loader.css';


const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background-color: #f8fafc;
`

export function Loader() {
	return (
		<Background >
			<div className="text-2xl font-medium">FindFocus</div>
			<div className="shapes-1 ml-3"></div>
		</Background>
	)

}
