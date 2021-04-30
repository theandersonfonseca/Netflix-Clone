import styled from 'styled-components'

export const Container = styled.footer`
  text-align: center;
  
  p {
    color: ${({theme}) => theme.gray};
    font-size: 1.6rem;
    padding: 2rem;
  }
`