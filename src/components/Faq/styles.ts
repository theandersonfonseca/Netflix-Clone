import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  .wrapper {
    padding: 4rem 3rem;
    width: 81.5rem;
    margin: auto;
    max-width: 100%;
  }

  @media(max-width: 600px) {
    padding: 0;
  }

  
  dl {
    width: 100%;
    margin-top: 3rem;
  }

  dd,
  dt {
    background: ${({theme}) => theme.gray};
    font-size: 2.6rem;
    padding: 2rem;

    
    @media (max-width: 900px) {
      font-size: 2rem;
    }
  }

  dt {
    margin-bottom: .1rem;
    cursor: pointer;
    position: relative;

    &::after {
      content: '+';
      position: absolute;
      right: 1rem; 
      top: 50%;
      transform: translateY(-50%);
      font-size: 4rem; 
    }
  }

  dd {
    margin-bottom: .4rem;
    display: none;

    &.show {
      display: block; 
    }
  }
  
  p {
    margin-bottom: 3rem;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
  }

  h1 {
    font-size: 5rem;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 1.9rem;
    text-align: center;
    margin-top: 3rem;
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