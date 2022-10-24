import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px 8px 32px;
    height: 160px;
    border-radius: 16px;
    background: #7b93ff;
`;
export const PiuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 80%;
`;
export const NameUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    position: top;
    justify-content: space-between;
    padding-bottom: 32px;
    margin-top: 0px;
    margin-left: 0px;
`;
export const Interactions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px 8px 16px;
    gap: 128px;
`;
export const Text = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`;
export const Name = styled.h2`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
`;
export const User = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
`;
export const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-top: 0px;
`;
export const Likes = styled.button`
    font-size: 16px;
    font-weight: 100;
`;
export const Rp = styled.button`
    font-size: 16px;
    font-weight: 100;
`;
export const Comments = styled.button`
    font-size: 16px;
    font-weight: 100;
`;
