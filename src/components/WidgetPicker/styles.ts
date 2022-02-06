import styled from 'styled-components';
import { Button } from '../../styles/Button';
import { CardButton } from '../../styles/CardButton';

export const Wrapper = styled.div`
    /* display: grid;
    grid-template-rows: 2.5rem 1fr; */
    width: 34rem;
    padding: 1rem;
    border-radius: 16px;
    background-color: var(--color-background);
    margin-bottom: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Widgets = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    height: 4rem;
`;

export const Widget = styled(CardButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    padding: 0.5rem 0rem;
	background-color: var(--color-background);
    color: var(--color-primary);
    /* transition: all 50ms ease-in; */
    width: 4.5rem;

    /* &:hover {
		box-shadow: var(--color-primary-shadow) 0px 4px 12px;
		transform: translateY(-4px);
        border: 1px solid var(--color-primary-light);
    }

    &:active {
        transform: scale(0.96);
        border: 1px solid var(--color-primary-dark);
    } */
`;
