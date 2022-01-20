import styled from 'styled-components';
import { Card } from '../../styles/HoverCard';

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    width: 34rem;
    padding: 1rem;
    border-radius: 16px;
    background-color: var(--color-background);
    margin-bottom: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

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
    color: var(--color-on-background)
`;

export const Widgets = styled.div`
    display: flex;
    gap: .5rem;
`;

export const Widget = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    padding: 0.5rem 0rem;
    /* border: 1px solid white; */
    transition: all 50ms;
    width: 4.5rem;
    /* color: var(--color-on-primary); */
    /* fill: var(--color-on-primary); */
`;

