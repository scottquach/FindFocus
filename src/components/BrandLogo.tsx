import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
	border-radius: 8px;
	background-color: var(--color-background);
	position: absolute;
	top: 1rem;
	left: 1rem;
	padding: .5rem .75rem;
	font-weight: 600;
`

export default function BrandLogo() {
	return (
		<Frame>FindFocus</Frame>
	)
}
