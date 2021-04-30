import styled from 'styled-components'

export const Container = styled.section`
  padding: 4.5rem 25rem;
  position: relative;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 90rem;
    max-width: 100%;

    @media (max-width: 1200px) {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 0;
  }

  .text,
  img {
    width: 50%;
  }

  img {
    margin-left: 3rem;
    position: relative;
  }

  h1 {
    font-size: 4rem;

    @media (max-width: 1200px) {
      font-size: 3rem;
    }

    @media(max-width: 900px) {
     font-size: 2rem;
   }
  }

  h2 {
    font-size: 2.2rem;

    @media(max-width: 900px) {
     font-size: 1.6rem;
     margin-top: 1.5rem;
   }
  }

  &::after {
   content: '';
   width: 100%;
   height: .8rem;
   background: ${({theme}) => theme.gray};
   position: absolute;
   left: 0;
   bottom: 0;
 }
`