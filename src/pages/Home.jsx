import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Underline from '../components/Underline'
import Contents from '../components/Contents'
import SigninBg from '../components/SigninBg'
import SigninForm from '../components/SigninForm'

import { Col } from 'antd'

class Home extends React.Component {
    render() {
        return (
            <Page>
               <Col span={24}>
                   <Title>REVIEW SERVICE FOR BOOKS</Title>
                   <SubTitle>
                       PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.
                   </SubTitle>
                   <Underline />
                   <Contents>
                       <SigninBg />
                       <SigninForm />
                   </Contents>
               </Col>
            </Page>
        )
    }
}

export default Home;