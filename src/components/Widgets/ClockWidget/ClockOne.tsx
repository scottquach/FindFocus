import { DateTime } from "luxon";
import styled from "styled-components";

const TodayLabel = styled.div`
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 1.25rem;
`

const DayOfMonth = styled.div`
	font-weight: 600;
	font-size: 64px;
	line-height: 3rem;
`

const Month = styled.div`
	font-weight: 400;
	font-size: 32px;
`

const TimeSimple = styled.div`
	margin-top: 1.25rem;
	font-size: 24px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export default function ClockOne({ dt }: { dt: DateTime }) {

	return (
		<Content>
			<TodayLabel>Today</TodayLabel>
			<DayOfMonth>{dt.toFormat('MM')}</DayOfMonth>
			<Month>{dt.toFormat('MMMM')}</Month>
			<TimeSimple>{dt.toLocaleString(DateTime.TIME_SIMPLE)}</TimeSimple>
		</Content>
	)
}