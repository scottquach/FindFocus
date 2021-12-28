import { useEffect, useState } from "react";
import axios from 'axios';
import { WidgetFrame } from "../WidgetFrame";
import styled from "styled-components";
import LoopIcon from '@mui/icons-material/Loop';
import { IconButton } from "@mui/material";

const Content = styled.div`
	display: grid;
	grid-template-rows: 1fr 2.5rem;
	align-items: center;
	height: 100%;
	width: 100%;
`

const Quote = styled.div`
	grid-row: 1 / 3;
	grid-column: 1;
	text-align: center;
	font-size: 18px;
	color: var(--color-on-background);
	padding: .25rem 1rem;
`

const Author = styled.div`
	text-align: center;
	font-weight: 600;
	margin-top: .25rem;
	color: var(--color-on-background);
`

const RefreshButton = styled(IconButton)`
	bottom: 5px;
	right: 5px;
	justify-self: end;
	grid-row: 2;
	grid-column: 1;
	opacity: 70%;
	/* color: blue; */

`
export function QuoteWidget({ widgetId }: { widgetId: string }) {
	// console.log('QUOTE WIDGET')

	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('')

	useEffect(() => {
		loadQuote();
	}, [])

	function loadQuote() {
		axios.get("https://api.quotable.io/random?maxLength=120")
			.then(response => {
				// console.log(response);
				setQuote(response.data.content)
				setAuthor(response.data.author)
			})
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<Quote>
					<div>"{quote}"</div>
					<Author>- {author}</Author>
				</Quote>
				<RefreshButton onClick={loadQuote} size="small">
					<LoopIcon style={{fill: "var(--color-on-background)"}}></LoopIcon>
				</RefreshButton>
			</Content>
		</WidgetFrame>
	)
}

