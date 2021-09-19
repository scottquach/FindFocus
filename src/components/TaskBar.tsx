import styled from "styled-components"


export function TaskBar() {


	const Bar = styled.div`
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		display: flex;
		width: 25rem;
		height: 2rem;
		padding: .5rem;
		background-color: var(--widget-background-color);
		border: 2px solid #000000;
		border-radius: 8px;
	`


	return (
		<Bar>
			<div>
				<div>icon</div>
				<button></button>
			</div>
			<div>Item 1</div>
			<div>Item 1</div>
		</Bar>
	)

}