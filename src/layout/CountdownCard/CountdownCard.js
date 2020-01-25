import React from 'react'
import styled from 'styled-components';
import Card from '../../components/Card/Card'
import { graphql, useStaticQuery } from 'gatsby'

const CountdownCard = () => {

  const { graphcms } = useStaticQuery(graphql`
    query {
      graphcms {
        events {
          name,
          date,
          id
        }
      }
    }
  `)

  return (
    <Card>
      {graphcms.events.map(event => (
        <React.Fragment key={event.id}>
          <div>{event.name} - {event.date}</div>
          <br/>
        </React.Fragment>
      ))}
    </Card>
  )
}

export default CountdownCard