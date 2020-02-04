import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme/theme"
import Header from '../components/Header/Header'
import { DateProvider } from '../contexts/DateContext'
import PropTypes from 'prop-types'
import SEO from '../components/SEO/SEO'

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.font.family};
        font-size: ${({ theme }) => theme.font.defSize};
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

const GlobalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`

const CenteredContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (max-width: 1321px) {
    width: 92vw;
  }
`

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media(max-width: 1321px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
  }
`

const Layout = ({ children, subtitle, description }) => (
  <>
    <SEO subtitle={subtitle} description={description} />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GlobalWrapper>
            <CenteredContent>
              <Header />
              <DateProvider>
                <Main>
                  {children}
                </Main>
              </DateProvider>
            </CenteredContent>
        </GlobalWrapper>
      </>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string
}

export default Layout
