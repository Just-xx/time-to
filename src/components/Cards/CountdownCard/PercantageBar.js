import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  align-items: center;
  justify-content: flex-start;
`


const PercentText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 6px;
`

const BarWrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  position: relative;
`

const Text = styled.div`
  position: absolute;
  color: #1f3343;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  font-size: 0.65rem;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

const Bar = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};;
`

const PercantageBar = ({ percent }) => {
  return (
    <Wrapper>
      <PercentText>{(percent * 100).toFixed(4)}%</PercentText>
      <BarWrapper>
        <Text>już minęło</Text>
        <Bar style={{ width: `${100 - (percent * 100)}%` }} />
      </BarWrapper>
    </Wrapper>
  )
}

PercantageBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default PercantageBar