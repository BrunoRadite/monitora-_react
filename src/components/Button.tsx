import styled from 'styled-components';

// Custom Button
export const Button = styled.button<Props>`
    background-color: ${(props) => props.isClose ? '#c05959' : '#59c0be'};
    color: #000;
    border: 0;
    margin-right:  ${(props) => props.isClose ? '15px' : '0px'};
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    &:hover{
        background-color:${(props) => props.isClose ? '#703030' : '#30706f'};
        color: #fff0df
    }
`;

interface Props {
    isClose?: boolean,
}