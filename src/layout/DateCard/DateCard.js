import React from "react"
import styled from "styled-components"
import Card from "../../components/Card/Card"

import dateContext from '../../contexts/DateContext'


const DateText = styled.div`
  color: ${({ theme }) => theme.colors.slight};
  font-size: 1.2rem;
`

const TimeText = styled.div`
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
`

const DateCard = () => {

  const dateContextVal = React.useContext(dateContext)

  return (
    <Card>
      <DateText>{dateContextVal.formattedDate}</DateText>
			<TimeText>{dateContextVal.formattedTime}</TimeText>
    </Card>
  )
}

export default DateCard
