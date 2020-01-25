import React from 'react'
import styled from 'styled-components';
import LogoImg from '../../utils/imgs/logo.svg'
import { Link } from 'gatsby'

const LogoWrapperLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const Text = styled.div`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 1.05rem;
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.secondary};
`

const Logo = () => (
    <LogoWrapperLink to="/">
        <Text>Time.to</Text>
        <img width={18} src={LogoImg} alt=""/>
    </LogoWrapperLink>
)

export default Logo