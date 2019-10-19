import React from 'react';
import { Button } from 'antd';

export default class SigninFormButton extends React.Component {
    render() {
        const wrapperStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px 0px 8px 0px",
        }
        return (
            <div style={wrapperStyle}>
            <span>{this.props.msg}</span>
            <Button type="primary">{this.props.text}</Button>
            </div>
        )
    }
}