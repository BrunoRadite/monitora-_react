import styled from "styled-components";
// type of props
interface Props {
    isLogin?: boolean
};

export const ContainerFullScreen = styled.div<Props>`
    min-height: 100vh;
    width:100%;
    display: flex;
    flex-direction: ${(props) => props.isLogin ? 'column' : 'row'};
    background:linear-gradient(to right,#064e56,#04b4c8) ;
    align-items: center;
    justify-content: center;
`;
