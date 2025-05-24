import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.cardBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-size: 10px;
    color: green;
  }
`;

export const Logo = styled.img`
  width: 130px;
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}
export const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.cardBackground};
    padding: 1rem 2rem;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    z-index: 999999;
    height: 100vh;
  }
`;
export const NavLink = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.backgroundHover};
  }
`;
