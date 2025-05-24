import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

export const CategoryContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background || "#0f0f0f"};
  color: ${(props) => props.theme.text || "#ffffff"};
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #333;
  border-top: 4px solid #e50914;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const HeaderSection = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 2rem;
  border-bottom: 1px solid #333;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: fit-content;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const HeaderInfo = styled.div`
  flex: 1;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const ResultsInfo = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
`

export const TypeToggle = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem;
  width: fit-content;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`

export const TypeButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  
  background-color: ${(props) => (props.active ? "#e50914" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#9ca3af")};
  
  &:hover {
    color: white;
    background-color: ${(props) => (props.active ? "#b8070f" : "rgba(255, 255, 255, 0.1)")};
  }
`

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`

export const MediaCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const MediaImageContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  aspect-ratio: 2/3;
`

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${MediaCard}:hover & {
    transform: scale(1.05);
  }
`

export const MediaOverlay = styled.div<{ visible: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`

export const OverlayContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OverlayTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const OverlayMetadata = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
`

export const MetadataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #d1d5db;
  
  svg {
    color: #fbbf24;
  }
`

export const OverlayGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const GenreBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.625rem;
`

export const OverlayDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1.4;
  color: #d1d5db;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const OverlayActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ActionButton = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  background-color: ${(props) => (props.primary ? "#e50914" : "rgba(255, 255, 255, 0.2)")};
  color: white;
  
  &:hover {
    background-color: ${(props) => (props.primary ? "#b8070f" : "rgba(255, 255, 255, 0.3)")};
  }
`

export const QuickInfo = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fbbf24;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`

export const MediaInfo = styled.div`
  padding: 1rem 0;
`

export const MediaTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MediaYear = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  border-top: 1px solid #333;
`

export const PaginationInfo = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
`

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 0.375rem;
  background-color: transparent;
  color: ${(props) => (props.disabled ? "#666" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #666;
  }
`

export const PaginationNumbers = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const PageNumber = styled.button<{ active?: boolean; disabled?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: all 0.2s;
  
  background-color: ${(props) => {
    if (props.active) return "#e50914"
    if (props.disabled) return "transparent"
    return "rgba(255, 255, 255, 0.1)"
  }};
  
  color: ${(props) => {
    if (props.active) return "white"
    if (props.disabled) return "#666"
    return "#d1d5db"
  }};
  
  &:hover:not(:disabled) {
    background-color: ${(props) => (props.active ? "#b8070f" : "rgba(255, 255, 255, 0.2)")};
  }
`
