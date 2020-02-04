import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


const ItemWrapper = styled(Link)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  background-color: #fff;
  margin: 5px 0;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 712px) {
    padding: 12px 24px;
  }

  @media screen and (max-width: 500px) {
    padding: 6px 12px;
    margin: 4px;
  }

  :hover {
    background-color: #dfdfdf;
  }
`

const Name = styled.div`
  color: #000;
  font-size: 0.95rem;
  margin-right: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 70px;
  
  @media screen and (max-width: 712px) {
    font-size: 0.85rem;
    margin-right: 80px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0px;
  }
`
const Date = styled.div`
  color: ${({ theme }) => theme.colors.slight};;
  font-size: 0.9rem;
  white-space: nowrap;

  @media screen and (max-width: 712px) {
    font-size: 0.8rem;
  }
`

const ListItem = ({ date, name, to }) => (
  <ItemWrapper to={to}>
    <Name>{name}</Name>
    <Date>{`${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getFullYear()}`}</Date>
  </ItemWrapper>
)

ListItem.propTypes = {
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default ListItem