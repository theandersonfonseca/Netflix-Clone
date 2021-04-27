import styled from 'styled-components'

export const Container = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;

  .logo {
    fill: ${({theme}) => theme.lightRed};
    width: 16.5rem;
    height: 4.5rem;
    position: relative;

    @media(max-width: 1000px) {
      width: 13.5rem;
      height: 3.5rem;
    }

    @media(max-width: 600px) {
      width: 11rem;
      height: 3rem;
    }
  }

  select {
    display: block;
    position: relative;
    margin-left: auto;
    padding: .8rem 2.2rem;
    color: ${({theme}) => theme.white};
    background: ${({theme}) => theme.black};
    font-size: 1.6rem;
    border-radius: .4rem;
    
    &:focus {
      border: .1rem solid;
    }

    @media(max-width: 600px) {
      padding: .4rem 1rem;
    }
  }

  button {
    position: relative;
    color: ${({theme}) => theme.white};
    background: ${({theme}) => theme.red};
    margin-left: 3rem;
    padding: .7rem 1.7rem;
    font-size: 1.6rem;
    border-radius: .4rem;
    border: none;
    outline: none;

    @media(max-width: 600px) {
      padding: .4rem 2rem;
      margin-left: 1rem;
    }
  }
`