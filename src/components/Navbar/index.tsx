import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import ThemeToggle from '../ThemeToggle';
import logo from '../../assets/simhioxlogo.png';
import { Menu, X } from 'lucide-react';
import { useAuthContext } from '../../providers/AuthProvider';

export default function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useAuthContext()
  const [menuOpen, setMenuOpen] = useState(false);
  const name = localStorage.getItem('nameUser')

  return (
    <Styled.NavbarContainer>
      <Styled.LogoContainer onClick={() => navigate('/')}>
        <Styled.Logo src={logo} />
        <p>films</p>
      </Styled.LogoContainer>

      <Styled.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </Styled.MenuToggle>

      <Styled.NavLinks isOpen={menuOpen}>
        <Link to="/">
          <Styled.NavLink>Início</Styled.NavLink>
        </Link>
        <Link to="/category/movie">
          <Styled.NavLink>Filmes</Styled.NavLink>
        </Link>
        <Link to="/category/series">
          <Styled.NavLink>Séries</Styled.NavLink>
        </Link>
      </Styled.NavLinks>

      <Styled.NavActions>
        <ThemeToggle />
        {token ?
          <>
            <p>Olá, {name}</p>
            <Styled.LogoutButton onClick={logout}>Sair</Styled.LogoutButton>
          </> :
          <Styled.LogoutButton onClick={() => navigate('/auth')}>Entrar</Styled.LogoutButton>}
      </Styled.NavActions>
    </Styled.NavbarContainer>
  );
}
