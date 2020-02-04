import React from "react"
import styled from "styled-components"
import Card from "../CardBase"

import dateContext from '../../../contexts/DateContext'


const DateWrapper = styled(Card)`
  margin-bottom: 14px;

  @media(max-width: 1321px) {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: ${({ theme }) => theme.sizes.tabletCardGap};
  }
`

const DateText = styled.div`
  color: ${({ theme }) => theme.colors.slight};
  font-size: 1.25rem;

  @media screen and (max-width: 498px) {
        font-size: 1.15rem;
  }
`

const TimeText = styled.div`
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;

  @media screen and (max-width: 498px) {
    font-size: 0.82rem;
  }
`

const DateCard = () => {

  const dateContextVal = React.useContext(dateContext)

  return (
      <DateWrapper>
        <DateText>{dateContextVal.formattedDate}</DateText>
        <TimeText>{dateContextVal.formattedTime}</TimeText>
      </DateWrapper>
  )
}

export default DateCard
