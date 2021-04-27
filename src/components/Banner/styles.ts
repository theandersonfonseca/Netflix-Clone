import styled from 'styled-components'
import BannerBg from '../../assets/banner.jpg'

export const Container = styled.div`
  height: 80vh;
  position: relative;

  &::after {
   content: '';
   width: 100%;
   height: .8rem;
   background: ${({theme}) => theme.gray};
   position: absolute;
   left: 0;
   bottom: 0;
 }
  
  &::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background: url(${BannerBg}) no-repeat center;
    background-size: cover;
    filter: brightness(0.4);
  }
`