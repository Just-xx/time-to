import React from "react"
import SEO from "../components/SEO/SEO"
import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import Layout from '../layout/Layout/Layout'
import Header from '../layout/Header/Header'

const Events = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header></Header>
        <ContentWrapper>
          Events
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Events
