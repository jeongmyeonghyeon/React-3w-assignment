import styled from 'styled-components'
import { Row } from 'antd'

const Page = styled(Row).attrs(() => ({
    type: 'flex',
    align: 'middle'
}))`
height: 100vh;
`;

export default Page;