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
        </Drawer> : <></>);
}