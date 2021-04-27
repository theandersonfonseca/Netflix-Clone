import styled from 'styled-components'

export const Container = styled.div`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 color: ${({theme}) => theme.white};
 text-align: center;
 width: 80rem;
 max-width: 100%;
 padding: 0 1.5rem;

 @media(max-width: 900px) {
     width: 64rem;
  }

  @media(max-width: 600px) {
     margin-top: 3rem;
   }

 h1 {
   font-size: 6.4rem;
   font-weight: 600;

   @media(max-width: 900px) {
     font-size: 5rem;
   }

   @media(max-width: 600px) {
     font-size: 2.8rem;
     line-height: 1;
   }
 }

 h2 {
   font-size: 2.6rem;
   margin-top: 2.5rem;

   @media(max-width: 900px) {
     font-size: 2.2rem;
   }

   @media(max-width: 600px) {
     font-size: 1.8rem;
      margin-top: 1.5rem;
   }
 }

 h3 {
   font-size: 1.9rem;
   margin-top: 2.5rem;

   @media(max-width: 600px) {
     margin-top: 1.5rem;
   }
 }
 
 form {
   margin-top: 2.5rem;
   display: flex;

   @media(max-width: 900px) {
     flex-direction: column;
     align-items: center;
   }
 }

 input {
   flex: 1;
   width: 100%;
   padding: 1rem;
   font-size: 1.4rem;
 }
`