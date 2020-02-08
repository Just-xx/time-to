import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


const ItemWrapper = styled(Link)`
  border: 1px solid #e1e1e1;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  
  padding: 10px;
  margin: 4px 0;
  width: 100%;

  @media screen and (max-width: 712px) {
    margin: 3px 0;
  }

  @media screen and (max-width: 500px) {
    margin: 2px 0;
  }

  :hover {
    background-color: #ecf7ff;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const Name = styled.div`
  color: #000;
  font-size: .95rem;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 70px;
  white-space: pre-line;
  margin-right: 20px;
  
  @media screen and (max-width: 712px) {
    font-size: 0.85rem;
    /* margin-right: 80px; */
  }

  @media screen and (max-width: 500px) {
    margin-right: 5px;
    font-size: .8rem;
  }
`
const Date = styled.div`
  color: ${({ theme }) => theme.colors.slight};
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