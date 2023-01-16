import { Dashboard, Engineering, Home, Menu } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveMenu } from '../../controllers/sliceActiveMenu';
import { useMenu } from '../../controllers/sliceMenu';
import { Drawer } from './Drawer';
import { DivIconMenu } from './IconMenu';
import { OptionMenu } from './OptionMenu';
import { Title } from './Title';

export default function MenuComponent() {
    const displayMenu = useSelector(useMenu);
    const dispatch = useDispatch();
    return (displayMenu !== 'login' ?
        <Drawer
            onMouseOver={() =>
                dispatch(setActiveMenu(true))
            }
            onMouseOut={() => {
                dispatch(setActiveMenu(false));
            }}>
            <DivIconMenu>
                <Menu />
            </DivIconMenu>
            <Link to='/' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === '' ? true : false}
                    onMouseOver={() => dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Home color='inherit' /><Title>TELA INICIAL</Title>
                </OptionMenu>
            </Link>
            <Link to='/dashboard' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'dashboard' || displayMenu === 'create' ? true : false}
                    onMouseOver={() => dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Dashboard color='inherit' /><Title>DASHBOARD</Title>
                </OptionMenu>
            </Link>
            <Link to='/gerenciamento' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'gerenciamento' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>GERENCIAMENTO</Title>
                </OptionMenu>
            </Link>
            <Link to='/g1' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g1' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G1</Title>
                </OptionMenu>
            </Link>
            <Link to='/g2' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g2' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G2</Title>
                </OptionMenu>
            </Link>
            <Link to='/g3' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g3' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G3</Title>
                </OptionMenu>
            </Link>
            <Link to='/g4' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g4' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G4</Title>
                </OptionMenu>
            </Link>
            <Link to='/g5' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g5' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G5</Title>
                </OptionMenu>
            </Link>
            <Link to='/g6' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g6' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G6</Title>
                </OptionMenu>
            </Link>
            <Link to='/g7' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g7' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G7</Title>
                </OptionMenu>
            </Link>
            <Link to='/g8' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g8' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G8</Title>
                </OptionMenu>
            </Link>
            <Link to='/g9' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g9' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G9</Title>
                </OptionMenu>
            </Link>
            <Link to='/g10' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g10' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G10</Title>
                </OptionMenu>
            </Link>
            <Link to='/g11' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g11' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G11</Title>
                </OptionMenu>
            </Link>
            <Link to='/g12' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g12' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G12</Title>
                </OptionMenu>
            </Link>
            <Link to='/g13' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g13' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G13</Title>
                </OptionMenu>
            </Link>
            <Link to='/g14' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g14' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G14</Title>
                </OptionMenu>
            </Link>
            <Link to='/g15' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g15' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G15</Title>
                </OptionMenu>
            </Link>
            <Link to='/g16' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g16' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G16</Title>
                </OptionMenu>
            </Link>
            <Link to='/g17' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g17' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G17</Title>
                </OptionMenu>
            </Link>
            <Link to='/g18' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g18' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G18</Title>
                </OptionMenu>
            </Link>
            <Link to='/g19' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g19' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G19</Title>
                </OptionMenu>
            </Link>
            <Link to='/g20' style={{ textDecoration: 'none' }} >
                <OptionMenu select={displayMenu === 'g20' ? true : false}
                    onMouseOver={() =>
                        dispatch(setActiveMenu(true))
                    }
                    onMouseOut={() => {
                        dispatch(setActiveMenu(false));
                    }}>
                    <Engineering color="inherit" /><Title>G20</Title>
                </OptionMenu>
            </Link>
        </Drawer> : <></>);
}