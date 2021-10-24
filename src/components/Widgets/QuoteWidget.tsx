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
	text-align: center;
	font-size: 18px;
`

const Author = styled.div`
	text-align: center;
	font-weight: 600;
	margin-top: .25rem;
`

const RefreshButton = styled(IconButton)`
	justify-self: end;
	align-self: end;

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
				console.log(response);
				setQuote(response.data.content)
				setAuthor(response.data.author)
			})
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<div>
					<Quote>"{quote}"</Quote>
					<Author>- {author}</Author>
				</div>
				<RefreshButton onClick={loadQuote}>
					<LoopIcon></LoopIcon>
				</RefreshButton>
			</Content>
		</WidgetFrame>
	)
}

