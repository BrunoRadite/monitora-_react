import styled from "styled-components";
import { DivIconMenu } from "./IconMenu";
import { OptionMenu } from "./OptionMenu";
import { Title } from "./Title";

export const Drawer = styled.nav`
    width: max-content;
    padding: 0px;
    background-color: #111B21;
    transition-property: width;
    transition-duration: 4s;
    transition-delay: 2s;
    display: flex;
    flex-direction: column;

&:hover{
    min-height:95vh;
    width: 250px;
}

/* update DivIconMenu */
&:hover ${DivIconMenu}{
    width: 250px;
}

/* update OptionMenu */
&:hover ${OptionMenu}{
    width: 250px;
}

/* display to title */
&:hover ${Title}{
    display: block;
}

`;