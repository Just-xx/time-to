import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.nav`
    display: flex;   
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.slight};
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: 30px;

    :last-child {
        margin-right: 0;
    }
`

const Nav = () => (
    <NavWrapper>
        <NavLink to="/">strona główna</NavLink>
        <NavLink to="/events">wydarzenia</NavLink>
    </NavWrapper>
)

export default Nav