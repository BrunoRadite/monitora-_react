import { Delete, Edit } from "@mui/icons-material";
import { display } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCaldeira, Caldeiras, clearCaldeiras, useCaldeiras } from "../../controllers/sliceCaldeiras"
import { deleteCaldeira, getCaldeiras } from "../../services/caldeiras";
import { Button } from "../Button";
import { Column } from "../Column";
import { Row } from "../Row";
import { Wrap } from "../Wrap";
import { Card } from "./Card";
import { DivInformations } from "./DivInformation";

interface Props {
    edit: any;
}

export default function CardCaldeira({ edit }: Props) {
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
    return (<div style={{ maxHeight: 'calc(100vh - 250px)', overflow: 'auto' }}><Wrap>
        {caldeiras.map((caldeira) =>
            <Card key={caldeira.id}>
                <Column style={{ height: 'auto' }}>
                    <img
                        style={{ height: '200px', width: '100%', borderRadius: '3px' }}
                        src={caldeira.foto !== '' ? caldeira.foto : 'https://www.megapecascuritiba.com.br/loja/img/system/sem-imagem.gif'}>
                    </img>
                    <DivInformations >
                        <div>nome: <b>{caldeira.nome!.toUpperCase()}</b></div>
                        <div>modelo: <b>{caldeira.modelo!.toUpperCase()}</b></div>
                        <div>temperatura maxima: <b>{caldeira.temperatura_max_celsius!} °C</b></div>
                    </DivInformations>
                </Column>
                <Row>
                    <Button isClose={true} onClick={() => deleteCal({ id: caldeira.id })} style={styleButton}> <Delete /></Button>
                    <Button style={styleButton} onClick={() => edit(true, caldeira.id)} > <Edit /></Button>
                </Row>
            </Card>)
        }</Wrap></div>
    );
}