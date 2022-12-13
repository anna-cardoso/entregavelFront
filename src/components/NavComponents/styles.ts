import styled from 'styled-components';

interface SelectedProps {
    selected: boolean;
}

export const Container = styled.div<SelectedProps>`
    background-color: ${(props) => (props.selected ? '#3856DC' : '#272727')};
    border-radius: ${(props) =>
        props.selected ? '0px 16px 16px 0px' : '0px 0px 0px 0px'};
    @media only screen and (min-width: 720px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px 0px 40px;
        gap: 4px;
        width: 100%;
        height: 56px;
        background-color: ${(props) =>
            props.selected ? '#3856DC' : '#272727'};
        border-radius: ${(props) =>
            props.selected ? '0px 16px 16px 0px' : '0px 0px 0px 0px'};
    }
`;
export const Title = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    align-items: center;
    color: #e1e7ff;

    @media only screen and (min-width: 1000px) {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #e1e7ff;
    }
`;

export const Logo = styled.img`
    left: 2%;
    right: 2%;
    top: 2%;
    bottom: 2%;
    padding-right: 2px;
`;
