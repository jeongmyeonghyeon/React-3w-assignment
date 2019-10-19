import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

export default class SigninFormLoginkButton extends React.Component {
    render() {
        const styles = {
            margin: "0px 0px 32px 0px",
        }

        return (
            <div style={styles}>
                <Button type="primary" block>SIGN IN</Button>
            </div>
        )
    }
};