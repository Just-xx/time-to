import React from "react"
import SEO from "../components/SEO/SEO"

import ContentWrapper from '../components/ContentWrapper/ContentWrapper'
import Layout from '../layout/Layout/Layout'
import Header from '../layout/Header/Header'

import DateCard from '../layout/DateCard/DateCard'
import CountdownCard from '../layout/CountdownCard/CountdownCard'

import { DateProvider } from '../contexts/DateContext'

const Index = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header></Header>
        <DateProvider>
          <ContentWrapper>
            <DateCard />
            <CountdownCard />
          </ContentWrapper>
        </DateProvider>
      </Layout>
    </>
  )
}

export default Index
