import React from 'react'
import styled from 'styled-components';
import Card from '../CardBase'
import ListItem from './ListItem'
import { graphql, useStaticQuery } from 'gatsby'

const ListWrapper = styled(Card)`
  padding: 45px 80px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 712px) {
    padding: 25px 50px;
  }

  @media screen and (max-width: 615px) {
    padding: 25px 24px;
  }
`

const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 1.1rem;
  margin-bottom: 20px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const EventListBig = () => {

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
    <ListWrapper>
      <Title>Dostępne odlicznia</Title>
      <List>
        {edges.map(({ node }) => (
          <ListItem key={node.path} to={node.path} name={node.context.event.name} date={new Date(node.context.event.date)}/>
        ))}
      </List>
    </ListWrapper>
  )
}
export default EventListBig