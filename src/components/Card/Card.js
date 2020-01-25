import styled from 'styled-components';

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.cardBgc};
    padding: 15px 40px;
    border-radius: 5px;
`

export default Card