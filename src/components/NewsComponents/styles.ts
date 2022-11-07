import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: collum;
    margin-left: 8px;
    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: cullum;
        align-items: center;
        width: 100%;
        height: 48px;
    }
`;
export const TextContainer = styled.div`
    padding-top: 8%;
    gap: 4px;
    align-items: space-between;
    display: flex;
    flex-direction: column;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #55596b;
    width: 100%;
`;
export const Title = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #e1e7ff;
    gap: 4px;
`;
export const Logo = styled.img`
    width: 64px;
    height: 64px;
    @media only screen and(min-width: 1000) {
        width: 72px;
        height: 72px;
    }
`;
export const Word = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #e1e7ff;
    @media only screen and (min-width: 1000) {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #e1e7ff;
    }
`;
