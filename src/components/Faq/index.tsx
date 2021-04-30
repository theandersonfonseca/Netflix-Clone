import React, {useRef} from 'react';
import EmailInput from '../EmailInput';
import { Container } from './styles';

const Faq = () => {
  const descriptionsRef = useRef<(HTMLElement | null)[]>([])

  const handleClick = (id: string) => {
    const descriptions = descriptionsRef.current

    descriptions.forEach((description, index) => {
      if (String(index) === id) {
        description?.classList.toggle('show') 
        return
      }

      description?.classList.remove('show')
    })
  }

  return (
  <Container>
    <div className="wrapper"> 
    <h1>Perguntas Frequentes</h1>

    <dl>
      <dt onClick={() => handleClick('0')}>O Que é Netflix?</dt>
      <dd ref={el => descriptionsRef.current[0] = el}>
        <p>A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p> 

        <p> Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</p>
      </dd>

      <dt onClick={() => handleClick('1')}>Quanto custa a Netflix?</dt>
      <dd ref={el => descriptionsRef.current[1] = el}>
        Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.
      </dd>

      <dt onClick={() => handleClick('2')}>Onde posso assistir?</dt>
      <dd ref={el => descriptionsRef.current[2] = el}>
        <p>Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.</p> 

        <p>Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.</p>
      </dd>

      <dt onClick={() => handleClick('3')}>Como faço para cancelar?</dt>
      <dd ref={el => descriptionsRef.current[3] = el}>
        A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
      </dd>

      <dt onClick={() => handleClick('4')}>O que eu posso assistir na Netflix?</dt>
      <dd ref={el => descriptionsRef.current[4] = el}>
        A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
      </dd>
    </dl>

    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

    <EmailInput/>
    </div>
  </Container>
  );
};

export default Faq;
