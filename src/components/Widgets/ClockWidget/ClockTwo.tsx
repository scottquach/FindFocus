import { DateTime } from "luxon";
import styled from "styled-components";

const DayOfWeek = styled.div`
	font-weight: 600;
	font-size: 24px;
	font-style: italic;
	margin-top: 1rem;
`

const Month = styled.div`
	font-weight: 400;
	font-size: 24px;
`

const Time = styled.div`
	margin-top: 1.25rem;
	font-size: 64px;
	font-weight: 600;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export default function ClockTwo({ dt }: { dt: DateTime }) {

	return (
		<Content>
			<Time>{dt.toFormat('hh:mm')}</Time>
			<DayOfWeek>{dt.toFormat('EEEE')}</DayOfWeek>
			<Month>{dt.toFormat('MMM d')}</Month>
		</Content>
	)
}