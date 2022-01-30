import styled from "styled-components";
import { Button } from "../../../styles/Button";

export const FavoriteButton = styled(Button)`
	display: flex;
	align-items: center;
	gap: .25rem;
	padding: .25rem .5rem;
	margin-left: .5rem;
	border-radius: 8px;
	cursor: pointer;
`
export const RoomName = styled.div`
	font-weight: bold;
	color: var(--color-background);
`;
