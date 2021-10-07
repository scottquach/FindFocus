import styled from "styled-components";


export const WidgetPreview = styled.div`
	display: grid;
	grid-template-rows: 1fr 5rem;
	grid-template-columns: 1fr;
	width: auto;
	height: 13rem;
	background-color: white;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	cursor: pointer;
	transition: all 75ms;

	:hover {
		transform: translateY(-5px);
		/* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 18px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
	}
`

export const PreviewWindow = styled.div`
	background-color: #FFA62B;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

`

export const DescriptionLayout = styled.div`
	display: flex;
	flex-direction: column;
	padding: .75rem;
`

export const Title = styled.div`
	line-height: 2rem;
	font-weight: 700;

`

export const DescriptionText = styled.div`
	font-size: 14px;

`


