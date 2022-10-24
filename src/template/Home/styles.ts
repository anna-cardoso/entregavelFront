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
