import styled from 'styled-components';

const ContentWrapper = styled.main`
    display: flex;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.sizes.contentMargin};
`

export default ContentWrapper