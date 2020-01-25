import React from "react"
import styled from "styled-components"
import Card from "../../components/Card/Card"



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


  return (
    <Card>
			<DateText>00-00-0000</DateText>
			<TimeText>00:00</TimeText>
    </Card>
  )
}

export default DateCard
