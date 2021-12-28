import { IconButton } from "@mui/material";
import styled from "styled-components";
import { MenuWrapper } from "../../styles/MenuHeaders";

// export const MenuHeaderLayout = styled(GlobalHeaderLayout)`
// 	margin-bottom: 0rem;
// `

// export const MenuDescription = styled.div`
// 	margin-bottom: 1.5rem;
// `

export const Wrapper = styled(MenuWrapper)`
	background-color: var(--color-background);
	/* background-color: #ffffffc0; */
	/* backdrop-filter: saturate(50%) blur(15px); */
	width: 30rem;
	height: 6rem;
	border-radius: 16px;
	margin-bottom: 1rem;

`

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 0.5rem;
`;


export const MenuTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
	color: var(--color-on-background);
`;

export const Themes = styled.div`
	display: flex;
	align-items: center;
	gap: .75rem;
	height: 100%;
	width: 100%;
`

export const ThemePalette = styled.div`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colorOnPrimary};
	border: 2px solid ${(props) => props.theme.colorPrimary};
	cursor: pointer;

    &:active {
        transform: scale(.95);
    }
`

// export const SectionHeaderLayout = styled.div`
// 	display: flex;
// 	margin-bottom: .75rem;
// 	div {
// 		margin-left: .25rem;
// 	}
// `



// export const Section = styled.div`
// 	/* display: flex; */
// 	display: grid;
// 	grid-gap: .75rem;
// 	grid-template-columns: repeat(auto-fill, 6rem);
// 	width: 100%;
// 	margin-bottom: 1rem;

// `

// export const Theme = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// `

// export const ThemeContainer = styled.div`
// 	width: 6rem;
// 	height: 5rem;
// 	border-radius: 4px;
// 	background-color: var(--color-gray-light);

// `

// export const ThemeName = styled.div`
// 	margin-top: .25rem;
// 	font-size: 12px;
// 	font-weight: 600;
// 	color: var(--color-gray-dark)

// `


// export { };