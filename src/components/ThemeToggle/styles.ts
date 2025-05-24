import styled from "styled-components"

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.backgroundHover};
  }
`