import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCaldeira, Caldeiras, clearCaldeiras, useCaldeiras } from '../controllers/sliceCaldeiras';
import { Delete, Edit } from '@mui/icons-material';
import { deleteCaldeira, getCaldeiras } from '../services/caldeiras';
import { Button } from './Button';



interface Props {
    edit: any;
}

export default function TableCaldeiras({ edit }: Props) {
    const caldeiras = useSelector(useCaldeiras);
    const dispatch = useDispatch();
    function deleteCal({ id }: any) {
        deleteCaldeira({ id: id }).then((_) => {
            dispatch(clearCaldeiras())
            getCaldeiras().then((response) => {
                response.data.map((caldeira: Caldeiras) => dispatch(addCaldeira(caldeira)));
            });
        });
    }

    const styleButton = { padding: '11px', paddingTop: '10px', paddingBottom: '5px', borderRadius: '50px' };
    return (
        <TableContainer component={Paper} variant='outlined' sx={{
            backgroundColor: 'transparent', width: 'auto', maxHeight: 'calc(100vh - 250px)'
        }}>
            <Table>
                {/* columns */}
                <TableHead>
                    <TableRow>
                        <TableCell >ID</TableCell>
                        <TableCell >NOME</TableCell>
                        <TableCell >MODELO</TableCell>
                        <TableCell >TEMPERATURA MÁXIMA</TableCell>
                        <TableCell align='right'><div style={{ marginRight: '30px' }}>AÇÕES</div></TableCell></TableRow>
                </TableHead>
                {/* rows */}
                <TableBody>{
                    caldeiras.map((caldeira) =>
                        <TableRow key={caldeira.id}>
                            <TableCell>{caldeira.id}</TableCell>
                            <TableCell>{caldeira.nome}</TableCell>
                            <TableCell>{caldeira.modelo}</TableCell>
                            <TableCell>{caldeira.temperatura_max_celsius + ' ºC'} </TableCell>
                            <TableCell align='right'>
                                <span >
                                    <Button isClose={true} onClick={() => deleteCal({ id: caldeira.id })} style={styleButton}> <Delete /></Button>
                                    <Button onClick={() => edit(true, caldeira.id)} style={styleButton}> <Edit /></Button>
                                </span>
                            </TableCell></TableRow>)
                }</TableBody>
            </Table>
        </TableContainer>
    );
}