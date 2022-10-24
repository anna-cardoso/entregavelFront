import styled from 'styled-components';

export const MainBody = styled.div`
    min-height: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: space-between;
`;
export const SideBarContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    width: 18%;
    background-color: #272727;
    border-right-width: 2px solid #55596b;
    left: 0px;
    position: fixed;
`;
export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0p 56p 0px 0px;
    height: 336px;
`;
export const ProfileContainer = styled.div`
    display: flex;
    position: bottom;
    margin-top: 72px;
    padding: 64px 128px 64px128px;
    flex-direction: column;
    height: 192px;
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
    align-items: center;
    width: 64%;
    height: 100vh;
    padding-top: 8px;
    background-color: #272727;
    position: absolute;
    left: 18%;
`;
export const SearchContainer = styled.div`
    display: flex;
    width: 800px;
    height: 64px;
    padding: 8px 24px 8px 32px;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 16px;
    background: #9198b4;
`;
export const Search = styled.input`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 100%;
    font-size: 24px;
    background: #9198b4;
    border: none;
    height: 80%;
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
