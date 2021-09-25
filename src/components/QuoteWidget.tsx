import { useEffect, useState } from "react";
import axios from 'axios';
import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";
import LoopIcon from '@mui/icons-material/Loop';
import { IconButton } from "@mui/material";

const QuoteLayout = styled(WidgetFrame)`
	display: grid;
	grid-template-rows: 1fr 2.5rem;
	align-items: center;
	width: 100%;
	padding: .25rem .75rem;
`

const Quote = styled.div`
	text-align: center;
	font-size: 18px;
`

const Author = styled.div`
	text-align: center;
	font-weight: 500;
	margin-top: .25rem;
`

const RefreshButton = styled(IconButton)`
	justify-self: end;

`
export function QuoteWidget() {

	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('')

	useEffect(() => {
		loadQuote();
	}, [])

	function loadQuote() {
		axios.get("https://api.quotable.io/random")
			.then(response => {
				console.log(response);
				setQuote(response.data.content)
				setAuthor(response.data.author)
			})
	}

	return (
		<QuoteLayout>
			<div>
				<Quote>"{quote}"</Quote>
				<Author>- {author}</Author>
			</div>
			<RefreshButton onClick={loadQuote}>
				<LoopIcon></LoopIcon>
			</RefreshButton>
		</QuoteLayout>
	)
}

