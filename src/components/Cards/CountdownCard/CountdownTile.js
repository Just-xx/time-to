import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 22px 0;
`

const TimeToText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.6rem;

  @media(max-width: 498px) {
    font-size: 1.4rem;
  }
`

const UnitText = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 0.8rem;

  @media(max-width: 498px) {
    font-size: 0.75rem;
  }
`

const CountdownTile = ({ time, unit }) => (
  <TileWrapper>
    <TimeToText>{time}</TimeToText>
    <UnitText>{unit}</UnitText>
  </TileWrapper>
) 

CountdownTile.propTypes = {
  time: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
}

export default CountdownTile