import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 32px 0px 0px 8px;
    gap: 8px;
    width: 200px;
    height: 56px;
`;
export const TextContainer = styled.div`
    padding-top: 8px;
    gap: 4px;
    align-items: space-between;
    display: flex;
    flex-direction: column;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #55596b;
`;
export const Title = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #e1e7ff;
`;

export const Logo = styled.img`
    width: 72px;
    height: 72px;
`;
export const Word = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #e1e7ff;
`;
