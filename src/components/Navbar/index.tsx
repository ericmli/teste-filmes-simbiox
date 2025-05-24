import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import ThemeToggle from '../ThemeToggle';
import logo from '../../assets/simhioxlogo.png';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

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
        <Link to="/home">
          <Styled.NavLink>Início</Styled.NavLink>
        </Link>
        <Link to="/category/movies">
          <Styled.NavLink>Filmes</Styled.NavLink>
        </Link>
        <Link to="/category/series">
          <Styled.NavLink>Séries</Styled.NavLink>
        </Link>
      </Styled.NavLinks>

      <Styled.NavActions>
        <ThemeToggle />
        <Styled.LogoutButton onClick={handleLogout}>Sair</Styled.LogoutButton>
      </Styled.NavActions>
    </Styled.NavbarContainer>
  );
}
