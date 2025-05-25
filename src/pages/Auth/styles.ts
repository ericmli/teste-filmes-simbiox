import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const AuthContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  overflow: hidden;
`

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.3;
`

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(229, 9, 20, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  z-index: 2;
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  z-index: 10;
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #333;
  border-top: 4px solid #e50914;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const AuthContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`

export const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
`

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        font-size: 10px;
        color: green;
    }
`
export const Logo = styled.img`
    width: 130px;
`

export const AuthTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`

export const AuthSubtitle = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InputContainer = styled.div<{ hasError?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${(props) => (props.hasError ? "#ef4444" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: ${(props) => (props.hasError ? "#ef4444" : "#e50914")};
    background: rgba(255, 255, 255, 0.08);
  }
`

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: #9ca3af;
  z-index: 1;
`

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
  
  &::placeholder {
    color: #6b7280;
  }
  
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.05) inset;
    -webkit-text-fill-color: white;
  }
`

export const PasswordToggle = styled.div`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`

export const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${(props) => (props.disabled ? "#666" : "linear-gradient(135deg, #e50914 0%, #b8070f 100%)")};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(229, 9, 20, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

export const ButtonSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`



export const AuthFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ToggleMode = styled.div`
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
  
  button {
    background: none;
    border: none;
    color: #e50914;
    font-weight: 600;
    cursor: pointer;
    margin-left: 0.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #b8070f;
      text-decoration: underline;
    }
  }
`

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Divider = styled.div`
  position: relative;
  text-align: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
  
  span {
    background: rgba(255, 255, 255, 0.05);
    padding: 0 1rem;
    color: #9ca3af;
    font-size: 0.875rem;
  }
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  img {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`

export const AuthToggle = styled.div``

export const ForgotPassword = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
  
  button {
    background: none;
    border: none;
    color: #e50914;
    font-size: 0.875rem;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.3s ease;
    
    &:hover {
      color: #b8070f;
    }
  }
`