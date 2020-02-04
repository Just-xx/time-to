import React from 'react'
import styled from 'styled-components'
import Card from '../CardBase'
import { graphql, useStaticQuery } from 'gatsby'
import ListItem from './ListItem'

const EventsListWrapper = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 0;
  width: 315px;

  @media screen and (max-width: 1321px) {
    margin-bottom: 20px;
    width: 100%;
  }
`

const ListTitle = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: #fff;
  font-size: 0.98rem;
  margin-bottom: 20px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-height: 440px;
  overflow-y: hidden;
`

const EventList = () => {

  const { allSitePage: { edges } } = useStaticQuery(graphql`
    query {
      allSitePage(filter: {component: {regex: "/EventTemplate[.]js$/"}}) {
        edges {
          node {
            path
            context {
              event {
                id
                name
                date
              }
            }
          }
        }
      }
    }
  `)

  return (
    <EventsListWrapper>
      <ListTitle>inne liczniki</ListTitle>
      <List>
        {edges.slice(0, 6).map(({ node }) => <ListItem to={node.path} name={node.context.event.name} date={new Date(node.context.event.date)} key={node.path}/>)}
      </List>
    </EventsListWrapper>
  )
}

export default EventList