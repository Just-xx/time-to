import React from 'react'
import DateCard from '../components/Cards/DateCard/DateCard'
import CountdownCard from '../components/Cards/CountdownCard/CountdownCard'
import Layout from '../templates/Layout'
import EventsList from '../components/Cards/EventsList/EventsList'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AsideColumn = styled.aside`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1321px) {
    width: 100%;
  }
`


const EventTemplate = ({ pageContext: { event } }) => (
  <Layout subtitle={event.name}>
    <CountdownCard eventToCount={event} />
    <AsideColumn>
      <DateCard />
      <EventsList />
    </AsideColumn>
  </Layout>
)

EventTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default EventTemplate