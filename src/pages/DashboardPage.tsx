import { List } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarActionDashboard } from '../components/BarActionDashboard';
import { Button } from '../components/Button';
import CardCaldeira from '../components/CardCaldeira/CardCaldeira';
import { Column } from '../components/Column';
import { ContainerFullScreen } from '../components/ContainerFullScreen';
import { Input } from '../components/Forms/Input';
import TableCaldeiras from '../components/TableCaldeiras';
import { useActiveMenu } from '../controllers/sliceActiveMenu';
import { addCaldeira, Caldeiras, clearCaldeiras, filterCaldeiras, restoreToState, useCaldeiras } from '../controllers/sliceCaldeiras';
import { setDisplayMenu } from '../controllers/sliceMenu';
import { getCaldeiras } from '../services/caldeiras';
import FormCaldeiraPage from './FormCaldeiraPage';

export default function DashboardPage() {
    const dispatch = useDispatch();
    const activeMenu = useSelector(useActiveMenu)


    useEffect(() => {
        dispatch(setDisplayMenu('dashboard'));
        dispatch(clearCaldeiras())
        getCaldeiras().then((response) => {
            response.data.map((caldeira: Caldeiras) => dispatch(addCaldeira(caldeira)));
        });
    }, []);

    const [formIsOpen, setIsOpen] = useState(false);
    const [idEdit, setIdEdit] = useState(-1);

    // view mode if true = table else = cards
    const [viewMode, setViewMode] = useState(true);

    function openForm(isEdit: boolean, id?: number) {
        setIsOpen(true);
        if (isEdit) {
            setIdEdit(id!)
        }
    }

    function closeForm() {
        setIsOpen(false);
        setIdEdit(-1)
    }


    // filter caldeiras
    const [filter, setFilter] = useState('');
    document.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            dispatch(restoreToState());
            dispatch(filterCaldeiras(filter));
        }
    });
    return (
        <ContainerFullScreen style={activeMenu ? { width: 'calc(100vw - 250px)' } : { width: 'calc(100vw - 55px)' }}>
            {/* if form */}
            {formIsOpen && (<FormCaldeiraPage close={closeForm} isEdit={idEdit !== (-1) ? true : false} id={idEdit !== (-1) ? idEdit : undefined}></FormCaldeiraPage>)}
            {/* if not form */}
            {!formIsOpen && <Column style={activeMenu ? { width: 'calc(100vw - 300px)' } : { width: 'calc(100vw - 105px)' }}>
                <h1>LISTAGEM DE CALDEIRAS</h1>
                <BarActionDashboard style={{
                    width: `${activeMenu ? 'calc(100vw - 305px)' : 'calc(100vw - 110px)'}`
                }}><div style={{ width: '200px' }}>
                        <Input id='filter'
                            value={filter} onChange={(text) => setFilter(text.currentTarget.value)}
                            style={{ marginBottom: '0px', width: '100%' }} placeholder='Pesquisar por nome ou modelo' />
                    </div>
                    {/* <Link to='/caldeiras/create' style={{ textDecoration: 'none' }}> */}
                    <span >
                        <Button onClick={() => setViewMode(!viewMode)} style={{ marginRight: '5px' }}>{viewMode ? 'VISUALIZAR EM CARDS' : 'VISUALIZAR EM TABELA'}</Button>
                        <Button onClick={() => openForm(false)}>ADICIONAR</Button>
                    </span>

                    {/* </Link> */}
                </BarActionDashboard>
                <div
                    style={{
                        borderRadius: '3px',
                        backgroundColor: '#e9ffff',
                        width: `${activeMenu ? 'calc(100vw - 296px)' : 'calc(100vw - 100px)'}`
                    }}>
                    {viewMode ? <TableCaldeiras edit={openForm} /> :
                        <CardCaldeira edit={openForm} />}
                </div>
            </Column>}
        </ContainerFullScreen>
    );
};