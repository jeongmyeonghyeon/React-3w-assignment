import React from 'react';
import { Col } from 'antd'

import SigninFormTitle from './SigninFormTitle'
import SigninFormInput from './SigninFormInput'
import SigninFormMsgButton from './SigninFormMsgButton'
import SigninFormLoginButton from './SigninFormLoginButton'

export default class SigninForm extends React.Component {
    _emailInput = React.createRef();
    _passwordInput = React.createRef();

    render() {
        return (
            <Col span={12} style={{verticalAlign: 'top', padding: '48px 24px 24px 24px'}}>
                <SigninFormTitle>LOG IN. START SERACHING.</SigninFormTitle> 
                <SigninFormInput name="Email" type="email"></SigninFormInput>
                <SigninFormInput name="Password" type="password"></SigninFormInput>
                <SigninFormLoginButton></SigninFormLoginButton>
                <div>
                    <SigninFormMsgButton msg="Need to create an account?" text="SIGN UP"></SigninFormMsgButton>
                    <SigninFormMsgButton msg="Forgot your password?" text="RECOVERY"></SigninFormMsgButton>
                </div>
            </Col>
        )
    }
}