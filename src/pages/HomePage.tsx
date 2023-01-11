import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ContainerFullScreen } from "../components/ContainerFullScreen";
import { HomePageContainer } from "../components/HomePage/HomePageContainer";
import { useActiveMenu } from "../controllers/sliceActiveMenu";
import { addCaldeira, Caldeiras, clearCaldeiras, useCaldeiras } from "../controllers/sliceCaldeiras";
import { setDisplayMenu } from "../controllers/sliceMenu";
import { getCaldeiras } from "../services/caldeiras";



export default function HomePage() {


    const caldeiras = useSelector(useCaldeiras);
    const dispatch = useDispatch();
    dispatch(setDisplayMenu(''));
    const activeMenu = useSelector(useActiveMenu);
    return (
        <ContainerFullScreen
            style={activeMenu ? { width: 'calc(100vw - 250px)' } : { width: 'calc(100vw - 55px)' }}>
            <HomePageContainer>
                <ul>{
                    caldeiras.map((caldeira) =>
                        <li key={caldeira.id}>
                            {caldeira.nome} - modelo {caldeira.modelo}
                        </li>)
                }</ul>
            </HomePageContainer>
        </ContainerFullScreen>
    );
}