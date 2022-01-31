import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
	border-radius: 8px;
	background-color: var(--color-background);
	color: var(--color-primary);
	position: absolute;
	top: 1rem;
	left: 1rem;
	padding: .25rem .75rem;
	font-weight: 600;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default function BrandLogo() {
	return (
		<Frame>FindFocus</Frame>
	)
}
