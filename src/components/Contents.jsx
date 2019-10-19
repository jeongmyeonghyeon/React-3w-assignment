import styled from 'styled-components'
import { Row } from 'antd'

const Contents = styled(Row).attrs(() => ({
    type: 'flex',
}))`
margin-top: 50px;
background-color: #f3f7f8;
margin-left: auto;
margin-right: auto;
width: 800px;
`;

export default Contents;