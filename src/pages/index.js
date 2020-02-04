import React from "react"
import { graphql } from 'gatsby'
import Layout from "../templates/Layout"

import EventsListBig from "../components/Cards/EventsListBig/EventsListBig"

const Index = ({ data }) => {
  return (
    <Layout>
      <EventsListBig />
    </Layout>
  )
}

export const eventsPagesQuery = graphql`
  query {
    graphcms {
      events(first: 2) {
        name,
        date,
        id
      }
    }
  }
`

export default Index
