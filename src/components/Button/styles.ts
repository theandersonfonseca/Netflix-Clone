import styled from 'styled-components';

export const Container = styled.button`
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
`;
