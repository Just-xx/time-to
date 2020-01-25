import React from 'react'
import styled from 'styled-components';
import Logo from '../../components/Logo/Logo'
import Nav from './Nav'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.sizes.contentMargin};
    height: 110px;
`;

const Header = () => (
    <HeaderWrapper>
        <Logo />
        <Nav />
    </HeaderWrapper>
)

export default Header