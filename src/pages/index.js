import React from "react"
import SEO from "../components/SEO/SEO"

import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import DateCard from '../layout/DateCard/DateCard'
import Layout from '../layout/Layout/Layout'
import Header from '../layout/Header/Header'

const Index = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header></Header>
        <ContentWrapper>
          <DateCard />
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Index
