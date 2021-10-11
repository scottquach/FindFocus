import styled from 'styled-components';
import { WidgetFrame } from './WidgetFrame';

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    width: 70rem;
    padding: 1rem;
    /* background-color: #f7f7f7; */
  font-family: 'Noto Sans', sans-serif !important;
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: .5rem;
`;

export const MenuTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const SectionTitle = styled.div`
	font-size: 14px;
	font-weight: 500;
	margin-bottom: .5rem;
	opacity: .75;
`

export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`
export const WidgetCategory = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 1rem; */
    border-radius: 8px;
    margin-bottom: 1rem;
`;

export const WidgetCategoryHeader = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: .5rem;
`;

export const WidgetCategoryList = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 12rem);
    grid-gap: 1.25rem;
    margin-bottom: 1.25rem;
`;
