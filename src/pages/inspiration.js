import React from 'react'
import Layout from '../templates/Layout'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 10px;
`

const Paragraph = styled.p`
  margin: 24px 0;
  font-size: 0.94rem;
`

const ExternalLink = styled.a`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

const Inspiration = () => (
  <Layout subtitle='inspiracja'>
    <Wrapper>
      <Paragraph>Inspiracją do stworzenia tego projektu była strona <ExternalLink href="https://kiedywakacje.pl/" target="__blank">kiedywakacje.pl</ExternalLink></Paragraph>
      <Paragraph>Kod źródłowy projektu dostępny jest <ExternalLink href="https://github.com/Just-xx/time-to" target="__blank">w tym repozytorium</ExternalLink> na github'ie.</Paragraph>
    </Wrapper>
  </Layout>
)

export default Inspiration