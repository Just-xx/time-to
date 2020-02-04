import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo/Logo'
import Nav from './Nav'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    margin: 5px 0 20px 0;
`;

const Header = () => (
    <HeaderWrapper>
        <Logo />
        <Nav />
    </HeaderWrapper>
)

export default Header