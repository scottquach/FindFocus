import { Dialog } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
	padding: 2rem;
	width: 30rem;


`

export default function OnBoarding() {
	return (
		<Dialog open={true}>
			<Content className="p-5">
				<div className="text-sm opacity-75 font-semibold">WELCOME 🥳</div>
				<div className="mb-4 text-xl">Let's help you <span className="font-bold text-2xl">FindFocus</span></div>
				<div>
					<div>
						<div className="font-bold text-2xl">Widgets</div>
						<div>Chunks of your life into one place</div>
						{/* <ul>
							<li><b>Add</b> as many as you like</li>
							<li><b>Move</b> to where you please</li>
							<li><b>Resize</b> and redefine</li>
						</ul> */}
					</div>
					<div>
						<div className="font-bold text-2xl">Rooms</div>
						<div>New environments everyday</div>
					</div>
				</div>
			</Content>
		</Dialog>
	)
}
