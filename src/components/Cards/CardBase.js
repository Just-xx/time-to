import styled from 'styled-components';
import PropTypes from 'prop-types'

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.cardBgc};
    padding: 15px 40px;
    border-radius: 5px;
    box-sizing: border-box;
    border: ${(props) => !props.noBorder ? '1px solid #ced3d7' : 'none'};
`

Card.propTypes = {
    noBorder: PropTypes.bool
}

export default Card