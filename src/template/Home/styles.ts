import styled from 'styled-components';

export const MainBody = styled.div`
    min-height: 100vh;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #272727;
`;
export const SideBarContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    width: 18%;
    background-color: #272727;
    border-right-width: 2px;
    border-right-style: solid;
    border-color: #55596b;
    left: 0px;
    gap: 4px;
    position: fixed;
`;
export const NavBarContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: space-evenly;
`;
export const ProfileContainer = styled.div`
    display: flex;
    position: bottom;
    margin-top: 72px;
    padding: 64px 128px 64px 128px;
    flex-direction: column;
`;
export const Profile = styled.img`
    border-radius: 50%;
    width: 64px;
    height: 64px;
`;
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    width: 64%;
    position: relative;
    background: #272727;
    gap: 8px;
`;
export const SubMainContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    padding: 8px 32px 8px 32px;
    justify-content: space-between;
    flex-direction: column;
`;
export const Search = styled.input`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px 8px 32px;
    gap: 360px;
    width: 100%;
    height: 64px;
    background: #9198b4;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16), 0px 3px 3px rgba(0, 0, 0, 0.16),
        0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
`;
export const PiuWriteContainer = styled.div`
    display: flex;
    width: 800px;
    height: 144px;
    padding: 8px 24px 8px 32px;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 16px;
    background: #9198b4;
`;
export const PiuInput = styled.input`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 380;
    font-size: 24px;
    color: #000000;
    border: none;
    height: 80%;
    background: none;
`;
export const SendButton = styled.button`
    font-size: 16px;
    font-weight: 100;
    width: 48px;
    height: 24px;
    border: none;
    background: #ffffff;
`;
export const PiuImageContainer = styled.button`
    display: flex;
    flex-direction: row;
    gap: 32px;
    flex-direction: row;
    background-image: src= '/assets/send.svg';
    position: right;
`;
export const PiuWriteButton = styled.img`
    width: 16px;
    height: 16px;
`;
export const MainCont = styled.div`
    display: flex;
    height: 64px;
    padding: 8px 24px 8px 32px;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
`;
// News containers
export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    height: 100%;
    width: 18%;
    padding: 8px 32px 8px 0px;
    background-color: #272727;
    position: fixed;
    top: 0px;
    right: 0px;
    border-left-width: 2px;
    border-left-style: solid;
    border-color: #55596b;
`;
