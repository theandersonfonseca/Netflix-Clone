import React, {useState} from 'react';
import { Container } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
  const [language, setLanguage] = useState('portuguese')

  return (
  <Container>
    <Logo className="logo"/>

    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="portuguese">Português</option>
      <option value="english">Inglês</option>
    </select>

    <button>Entrar</button>
  </Container>
  );
};

export default Header;
