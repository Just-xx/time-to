import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Card from '../CardBase'
import CountdownTile from './CountdownTile'

import DateContext from '../../../contexts/DateContext'

const units = {
  days: {
    name: 'dni',
    ms: 60 * 1000 * 60 * 24
  },
  hours: {
    name: 'godzin',
    ms: 60 * 1000 * 60
  },
  minutes: {
    name: 'minut',
    ms: 60 * 1000
  },
  seconds: {
    name: 'sekund',
    ms: 1000
  },
  weeks: {
    name: 'tygodni',
    ms: 60 * 1000 * 60 * 24 * 7
  }
}


const CountdownContainer = styled(Card)`
  padding: 40px 100px;
  margin-right: ${({ theme }) => theme.sizes.cardGap};
  width: 800px;

  @media screen and (max-width: 1321px) {
    width: 100%;
    margin: 0;
    margin-bottom: ${({ theme }) => theme.sizes.tabletCardGap};
  }

  @media screen and (max-width: 583px) {
    padding: 40px 40px;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;

  @media(max-width: 498px) {
    font-size: 0.87rem;
  }
`

const TitleEvent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

const CountdownEndedText = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

const CountdownCard = ({ eventToCount }) => {

  const dateContext = React.useContext(DateContext)

  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
    weeks: '0'
  })

  const [isEnded, setIsEnded] = useState(false)


  useEffect(() => {
    
    let msBase = new Date(eventToCount.date).getTime() - dateContext.dateObj.getTime()
    
    

    if (msBase < 0) {
      setIsEnded(true)
    }

    const updateInterval = setInterval(() => {

      msBase -= 21

      if (msBase < 0) {
        setIsEnded(true)
        clearInterval(updateInterval)
      } else {
        setTime({
          days: Math.floor((msBase / units.days.ms)).toString(),
          hours: Math.floor((msBase / units.hours.ms)).toString(),
          minutes: Math.floor((msBase / units.minutes.ms)).toString(),
          seconds: (msBase / units.seconds.ms).toFixed(3),
          weeks: Math.floor((msBase / units.weeks.ms)).toString()
        })
      }

    }, 21)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CountdownContainer>
      {!isEnded ? (
        <>
          <Title>Do wydarzenia<TitleEvent> {eventToCount.name} </TitleEvent>zostało jeszcze:</Title>
          {Object.keys(time).map(timeObjKey => (
            <CountdownTile key={timeObjKey} unit={units[timeObjKey].name} time={time[timeObjKey]} />
          ))}
        </>
      ) : <CountdownEndedText>Odlliczanie zostało zakończone.</CountdownEndedText>}
    </CountdownContainer>
  )
}

CountdownCard.propTypes = {
  eventToCount: PropTypes.object.isRequired
}

export default CountdownCard