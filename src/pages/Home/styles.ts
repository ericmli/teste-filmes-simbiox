import styled from "styled-components"

// Home Container
export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`

// Hero Banner
export const HeroBanner = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
`

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: all 1s ease;
`

export const HeroGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
`

export const HeroBottomGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`

export const HeroInfoContainer = styled.div`
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const HeroLogo = styled.img`
  height: 5rem;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 8rem;
  }
`

export const HeroMetadata = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
`

export const MetadataItem = styled.span`
  color: ${(props) => props.theme.text};
`

export const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const GenreBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #d1d5db;
  max-width: 36rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e7eb;
  }
`

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: 1px solid white;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`

export const BannerDots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`

export const BannerDot = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.4)")};
  transition: background-color 0.2s;
`

// Content Sections
export const ContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  
  .slick-track {
    display: flex;
    gap: 1rem;
  }
  
  .slick-slide {
    padding: 0.5rem;
  }
`

export const SliderItem = styled.div`
  padding: 0 0.5rem;
`

export const MediaCard = styled.div`
  background-color: ${(props) => props.theme.cardBackground || "#1f2937"};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const MediaImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
`

export const MediaImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${MediaCard}:hover & {
    transform: scale(1.05);
  }
`

export const MediaImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s;
  
  ${MediaCard}:hover & {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const MediaRating = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fbbf24;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const NewBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
`

export const MediaInfo = styled.div`
  padding: 1rem;
  min-height: 65px;
`

export const MediaTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MediaYear = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.textSecondary || "#9ca3af"};
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  color: white;
  font-size: 1.2rem;
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const CarouselContent = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0.5rem 0;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 50%;
  
  @media (min-width: 768px) {
    width: 25%;
  }
  
  @media (min-width: 1024px) {
    width: 16.666667%;
  }
`

export const CarouselPrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid #4b5563;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const CarouselNextButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid #4b5563;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`
