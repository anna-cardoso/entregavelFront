import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: collum;
    gap: 8px;
    width: fit-content;
    height: fit-content;
    @media only screen and (min-width: 1000px) {
        display: flex;
        align-items: center;
        padding: 8px 0px 0px 16px;
        gap: 10px;
        width: auto;
        height: 56px;
    }
`;
export const Title = styled.span`
    padding-top: 16px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 1776;
    font-size: 20px;
    color: #7b93ff;
    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-size: 36px;
        color: #7b93ff;
    }
`;

export const Logo = styled.img`
    display: flex;
    @media only screen and (min-width: 1000px) {
        left: 8%;
        right: 8%;
        top: 8%;
        bottom: 8%;
    }
`;
