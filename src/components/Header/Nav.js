import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.nav`
    margin-left: 22px;
    display: flex;   
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.slight};
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    :last-child {
        margin-right: 0;
    }

    @media(max-width: 498px) {
        margin-right: 10px;
        font-size: 0.75rem;
    }

    @media(max-width: 391px) {
        margin-right: 8px;
        font-size: 0.7rem;
    }
`

const Nav = () => (
    <NavWrapper>
        <NavLink to="/">strona główna</NavLink>
        <NavLink to="/inspiration">inspiracja</NavLink>
    </NavWrapper>
)

export default Nav