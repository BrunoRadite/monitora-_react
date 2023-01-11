import styled from 'styled-components';

var url = window.location.href.split('/').at(-1)
// Custom Button OptionMenu NavBar
export const OptionMenu = styled.button<Props>`
    padding: 0px;
    color:white;
    border: none;
    font-size: 25px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    margin-top: 5px;
    background-color: ${props => props.select ? '#30706f71' : 'transparent'};
    &:hover{
        background-color: #30706f;
        color: #000
    }
`;

// type of props
interface Props {
    select: boolean
};