import React from "react"
import SEO from "../components/SEO/SEO"
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import Layout from '../layout/Layout/Layout'
import Header from '../layout/Header/Header'

const Error404 = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header></Header>
        <ContentWrapper>
          404
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Error404
