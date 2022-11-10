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
    display: table-row;
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
    padding-bottom: 24px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;

export const Text = styled.div`
    padding-bottom: 16px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
`;
export const Image = styled.img`
    @media only screen and (min-width: 800px) {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        padding-left: 4px;
    }

    witdh: 64px;
    height: 64px;
    border-radius: 50%;
    padding-left: 2px;
`;
export const Interactions = styled.div`
    @media only screen and (min-width: 800px) {
        display: flex;
        gap: 100px;
        width: 100%;
    }
    @media only screen and (min-width: 1080px) {
        display: flex;
        gap: 140px;
        width: 100%;
    }
    @media only screen and (min-width: 1240px) {
        display: flex;
        gap: 180px;
        width: 100%;
    }
    @media only screen and (min-width: 1380px) {
        display: flex;
        gap: 200px;
        width: 100%;
    }
    @media only screen and (min-width: 1500px) {
        display: flex;
        gap: 280px;
        width: 100%;
    }
    @media only screen and (min-width: 1800px) {
        display: flex;
        gap: 380px;
        width: 100%;
    }
`;
export const DeleteButton = styled.img`
    width: 48px;
    height: 24px;
    border-radius: 8px;
`;
export const Likes = styled.img`
    width: 24px;
    height: 24px;
`;
export const Rp = styled.img`
    width: 24px;
    height: 24px;
`;
export const Comments = styled.img`
    width: 24px;
    height: 24px;
`;
