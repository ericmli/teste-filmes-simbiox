import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const DetailsContainer = styled.div`
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

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;
  
  button {
    background-color: #e50914;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    
    &:hover {
      background-color: #b8070f;
    }
  }
`

export const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    padding: 4rem;
  }
`

export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  
  @media (min-width: 768px) {
    top: 4rem;
    left: 4rem;
  }
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`

export const PosterContainer = styled.div`
  flex-shrink: 0;
  align-self: center;
  
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`

export const PosterImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  
  @media (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const Tagline = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #d1d5db;
`

export const MetadataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const MetadataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #d1d5db;
  
  svg {
    color: #fbbf24;
  }
`

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const GenreBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db;
  max-width: 600px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e50914;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #b8070f;
  }
`

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: white;
    color: black;
  }
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const DirectorInfo = styled.p`
  font-size: 0.875rem;
  color: #d1d5db;
`

export const ContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    padding: 4rem;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

export const VideoPlayer = styled.div`
  flex: 1;
  
  iframe {
    border-radius: 0.5rem;
  }
`

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    width: 300px;
  }
`

export const VideoItem = styled.button<{ active: boolean }>`
  text-align: left;
  padding: 0.75rem;
  background-color: ${(props) => (props.active ? "#e50914" : "rgba(255, 255, 255, 0.1)")};
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#b8070f" : "rgba(255, 255, 255, 0.2)")};
  }
`

export const CastContainer = styled.div`
  .slick-track {
    display: flex;
    gap: 1rem;
  }
  
  .slick-slide {
    padding: 0.5rem;
  }
`

export const CastItem = styled.div`
  padding: 0 0.5rem;
`

export const CastCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const CastImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const CastInfo = styled.div`
  padding: 1rem;
`

export const CastName = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`

export const CastCharacter = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const InfoLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
`

export const InfoValue = styled.span`
  font-size: 1rem;
`

export const RecommendationsContainer = styled.div`
  .slick-track {
    display: flex;
    gap: 1rem;
  }
  
  .slick-slide {
    padding: 0.5rem;
  }
`

export const RecommendationItem = styled.div`
  padding: 0 0.5rem;
`

export const RecommendationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const RecommendationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const RecommendationInfo = styled.div`
  padding: 1rem;
`

export const RecommendationTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const RecommendationRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #fbbf24;
`
