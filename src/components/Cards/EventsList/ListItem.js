import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ItemWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.bgc};
  text-decoration: none;
  width: 100%;
  padding: 7px 0;

  @media screen and (max-width: 1321px) {
    padding: 14px 0;
  }

  :nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.19);
  }
`

const innerMargin = '24px'

const Name = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 0.8rem;
  margin-left: ${innerMargin};
  margin-right: 10px;
`

const Date = styled.div`
  opacity: 0.8;
  font-size: 0.8rem;
  margin-right: ${innerMargin};
  text-align: center;
  white-space: nowrap;
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