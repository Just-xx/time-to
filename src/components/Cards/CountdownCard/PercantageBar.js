import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  align-items: center;
  justify-content: flex-start;
`


const PercentText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 8px;
  font-size: 1rem;
`

const BarWrapper = styled.div`
  width: 100%;
  height: 18px;
  border-radius: 6px;
  background-color: #e8e8e8;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  position: relative;
`

const BarText = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  font-size: .51rem;
  border-radius: 2px;
  opacity: .55;
`

const Bar = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
`

const PercantageBar = ({ percent }) => {
  return (
    <Wrapper>
      <PercentText>{(percent * 100).toFixed(4)}%</PercentText>
      <BarWrapper>
        <Bar style={{ width: `${100 - (percent * 100)}%` }} />
        <BarText>tyle już minęło</BarText>
      </BarWrapper>
    </Wrapper>
  )
}

PercantageBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default PercantageBar