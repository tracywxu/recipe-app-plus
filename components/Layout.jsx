import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { QUERIES } from '../lib/constants'

export default function Layout({ children, alignment }) {
  return (
    <>
      <Header />
      <Wrapper alignment={alignment}>
        <Main>{children}</Main>
        <Sidebar />
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${(p) => p.alignment || 'baseline'};
  padding: 120px;
  padding-top: 100px;
  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
    padding: 60px;
  }
`
const Main = styled.main`
  padding-right: 60px;
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    padding: 0;
  }
`
