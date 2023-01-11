import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Column } from '../components/Column';
import { Form } from '../components/Forms/Form';
import { Input } from '../components/Forms/Input';
import { DescriptionContainer } from '../components/LoginPage/DescriptionContainer';
import { FormContainer } from '../components/LoginPage/FormContainer';
import { InnerContainer } from '../components/InnerContainer';
import GetAccessToken from '../services/LoginPageService';
import { useNavigate } from 'react-router-dom';
import { ContainerFullScreen } from '../components/ContainerFullScreen';
import { useDispatch } from 'react-redux';
import { setDisplayMenu } from '../controllers/sliceMenu';


// Login Page
function LoginPage() {
    // clear of token
    localStorage.removeItem('accessToken');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => { dispatch(setDisplayMenu('login')) })

    //controller email
    const [email, setEmail] = useState('');
    //controller password
    const [password, setPassword] = useState('');

    //controller button
    const [disabled, setDisabled] = useState(false);

    const body = {
        email: email,
        password: password
    }

    //onClick of button 'Logar'
    const onClick = (e: SyntheticEvent) => {
        e.preventDefault();

        // disabled of button
        setDisabled(true);
        // if then redirect for home, else set disabled false
        GetAccessToken({ body: body }).then(resp => localStorage.setItem('accessToken', resp.data.access)).then((_) => navigate('/')).catch((e) => { setDisabled(false); alert(e); })
    }
    return (<ContainerFullScreen isLogin={true}>
        <InnerContainer >

            {/* description of Systen */}
            <DescriptionContainer>
                <h2>Bem vindo ao site teste, utilizando as tecnologias React.js, TypeScript, styled_components, Axios e Redux</h2>
            </DescriptionContainer>

            {/* form of Login */}
            <FormContainer>
                <Column style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <h1>Login Page</h1>
                    <div style={{
                        width: '290px',
                    }}>
                        <Form>
                            <Input type='email' name='email' id='email' value={email} onChange={(t) => setEmail(t.currentTarget.value)}></Input>
                            <Input type='password' name='password' id='password' value={password} onChange={(t) => setPassword(t.currentTarget.value)}></Input>
                        </Form>
                    </div>
                    <Button disabled={disabled} onClick={onClick}>LOGAR</Button>
                </Column>
            </FormContainer>

        </InnerContainer></ContainerFullScreen>
    );
}

export default LoginPage;