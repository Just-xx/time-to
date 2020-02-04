import styled from 'styled-components';

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.cardBgc};
    padding: 15px 40px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px 0px rgba(0, 85, 150, 0.1), 2px 1px 2px 0px rgba(0, 0, 0, 0.05);
`

export default Card