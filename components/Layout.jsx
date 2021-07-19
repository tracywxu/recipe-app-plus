import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

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
  padding: 60px 60px 0 60px;
`
const Main = styled.main`
  padding-right: 60px;
  flex: 1;
`
