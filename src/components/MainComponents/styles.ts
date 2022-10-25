import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 8%;
    background: #7b93ff;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
`;
export const PiuContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: initial;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;
export const NameUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: top;
    justify-content: space-between;
    padding-bottom: 32px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;
export const Interactions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 33%;
    width: 100%;
`;
export const Text = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;
export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-left: 4px;
`;
export const Likes = styled.img`
    width: 24px;
    height: 24px;
`;
