import React from 'react'
import styled from 'styled-components';
import { Input } from 'antd';

export default class SigninFormInput extends React.Component {
    render(props) {
        return (
            <div className="signinFormInput">
            <span>{this.props.name}</span>
            <Input type={this.props.type}></Input>
            </div>
        )
    }
};