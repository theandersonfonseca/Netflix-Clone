import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 2.5rem;
  display: flex;
  width: 100%;

  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

 input {
   flex: 1;
   width: 100%;
   padding: 1rem;
   font-size: 1.4rem;
 }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    max-width: 100%;
    padding: 1rem 0;
    background: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
    font-size: 3rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;

    @media(max-width: 900px) {
      width: 15rem;
      font-size: 2rem;
      margin-top: 3rem;
    }

    @media(max-width: 600px) {
      width: 10rem;
      font-size: 1.6rem;
      margin-top: 1.5rem;
   }
  }
`;
