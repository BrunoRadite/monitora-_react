import React, { useEffect, useState } from 'react';
import { InnerContainerForms } from '../components/InnerContainerForms';
import { Input } from '../components/Forms/Input';
import { Form } from '../components/Forms/Form';
import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { addCaldeira, Caldeiras, clearCaldeiras } from '../controllers/sliceCaldeiras';
import { caldeiraDetails, createCaldeira, getCaldeiras, updateCaldeira } from '../services/caldeiras';
import { setDisplayMenu } from '../controllers/sliceMenu';


interface Props {
    close: React.MouseEventHandler;
    isEdit?: boolean;
    id?: number;
}


export default function FormCaldeiraPage({ close, isEdit, id }: Props) {


    const dispatch = useDispatch();
    // update route
    dispatch(setDisplayMenu('dashboard'))


    // controller nome
    const [nome, setNome] = useState('');

    // controller modelo
    const [modelo, setModelo] = useState('');

    // controller foto
    const [foto, setFoto] = useState('');

    // controller temp
    const [temp, setTemp] = useState('');

    useEffect(() => {
        if (isEdit && id) {

            caldeiraDetails({ id: id }).then((response) => {
                const cal: Caldeiras = response.data;
                setNome(cal.nome!)
                setModelo(cal.modelo!)
                setFoto(cal.foto!)
                setTemp(`${cal.temperatura_max_celsius!}`)
            });
        }
    }, []);


    const body: Caldeiras = { nome: nome, modelo: modelo, temperatura_max_celsius: parseInt(temp), foto: foto }

    function create(e: any) {
        e.preventDefault();
        createCaldeira({ body: body }).then((response) => { const newCaldeira: Caldeiras = response.data; dispatch(addCaldeira(newCaldeira)); }).then((_) => close(e));
    }
    function update(e: any) {
        e.preventDefault();
        updateCaldeira({ id: id, body: body }).then((response) => {
            dispatch(clearCaldeiras());
            getCaldeiras().then((response) => {
                response.data.map((caldeira: Caldeiras) => dispatch(addCaldeira(caldeira)));
            });
        }).then((_) => close(e));
    }

    const getBase64 = (file: Blob) => {
        return new Promise(resolve => {
            let baseURL;
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = (e: any) => {
        var file = e.target.files[0];

        getBase64(file)
            .then(result => {
                file["base64"] = result;
                setFoto(file.base64);
            })
            .catch(err => {
                console.log(err);
            });

    };



    return (
        <InnerContainerForms>
            <div style={{
                width: 480
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontWeight: 'normal', color: 'black' }}>{isEdit ? 'EDITAR CALDEIRA' : 'ADICIONAR CALDEIRA'}</h1>
                </div>
                <Form>
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                        <img style={{ height: 105, width: 105, minWidth: 105 }} src={foto !== '' ? foto : 'https://www.megapecascuritiba.com.br/loja/img/system/sem-imagem.gif'}></img>

                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', width: '480px' }}>
                            <div style={{ display: 'flex' }}><label>Foto:</label></div>
                            <Input name='foto' id='foto' type={'file'} accept="image/png, image/jpeg"
                                onChange={handleFileInputChange} /></div>
                    </div>

                    <div style={{ display: 'flex' }}><label>Nome:</label></div>
                    <Input name='nome' id='nome' type={'text'}
                        value={nome} onChange={(text) => { setNome(text.currentTarget.value) }} />
                    <div style={{ display: 'flex' }}><label>Modelo:</label></div>
                    <Input name='modelo' id='modelo' type={'text'}
                        value={modelo} onChange={(text) => { setModelo(text.currentTarget.value) }} />

                    <div style={{ display: 'flex' }}><label>Temperatura em ºC:</label></div>
                    <Input name='temp' id='temp' type={'number'}
                        value={temp} onChange={(text) => { setTemp(text.currentTarget.value) }} />
                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                        <Button isClose={true} onClick={close}>CANCELAR</Button> <Button onClick={isEdit ? update : create}>{isEdit ? 'EDITAR' : 'ADICIONAR'}</Button>
                    </div>
                </Form>
            </div>
        </InnerContainerForms>
    )
}