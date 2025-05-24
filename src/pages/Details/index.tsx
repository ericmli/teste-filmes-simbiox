import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Play, ArrowLeft, Star, Calendar, Clock, Heart, Share2, Plus } from "lucide-react"
import Navbar from "../../components/Navbar"
import { getDetails, getCredits, getVideos, getRecommendations } from "../../api/tmdb"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as Styled from './styles'

interface MovieDetails {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  vote_count: number
  release_date?: string
  first_air_date?: string
  runtime?: number
  episode_run_time?: number[]
  genres: Array<{ id: number; name: string }>
  production_companies: Array<{ id: number; name: string; logo_path: string }>
  spoken_languages: Array<{ iso_639_1: string; name: string }>
  status: string
  tagline: string
  budget?: number
  revenue?: number
  number_of_seasons?: number
  number_of_episodes?: number
}

interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string
}

interface CrewMember {
  id: number
  name: string
  job: string
  profile_path: string
}

interface Video {
  id: string
  key: string
  name: string
  type: string
  site: string
}

interface Recommendation {
  id: number
  title?: string
  name?: string
  poster_path: string
  vote_average: number
  release_date?: string
  first_air_date?: string
}

export const Details = () => {
  const { type, id } = useParams<{ type: string; id: string }>()
  const navigate = useNavigate()

  const [details, setDetails] = useState<MovieDetails | null>(null)
  const [cast, setCast] = useState<CastMember[]>([])
  const [crew, setCrew] = useState<CrewMember[]>([])
  const [videos, setVideos] = useState<Video[]>([])
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const isMovie = type === "movie"
  const mediaType = isMovie ? "movie" : "tv"

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Buscar detalhes
        const detailsResponse = await getDetails(Number.parseInt(id), mediaType)
        setDetails(detailsResponse.data)

        // Buscar elenco e equipe
        const creditsResponse = await getCredits(Number.parseInt(id), mediaType)
        setCast(creditsResponse.data.cast.slice(0, 20))
        setCrew(creditsResponse.data.crew.slice(0, 10))

        // Buscar vídeos
        const videosResponse = await getVideos(Number.parseInt(id), mediaType)
        const trailers = videosResponse.data.results.filter(
          (video: Video) => video.type === "Trailer" && video.site === "YouTube",
        )
        setVideos(trailers)
        if (trailers.length > 0) {
          setSelectedVideo(trailers[0])
        }

        // Buscar recomendações
        const recommendationsResponse = await getRecommendations(Number.parseInt(id), mediaType)
        setRecommendations(recommendationsResponse.data.results.slice(0, 12))
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, mediaType])

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const getDirector = () => {
    return crew.find((member) => member.job === "Director")
  }

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (isLoading) {
    return (
      <Styled.DetailsContainer>
        <Navbar />
        <Styled.LoadingContainer>
          <Styled.LoadingSpinner />
          <p>Carregando detalhes...</p>
        </Styled.LoadingContainer>
      </Styled.DetailsContainer>
    )
  }

  if (!details) {
    return (
      <Styled.DetailsContainer>
        <Navbar />
        <Styled.ErrorContainer>
          <h2>Conteúdo não encontrado</h2>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </Styled.ErrorContainer>
      </Styled.DetailsContainer>
    )
  }

  const title = details.title || details.name || ""
  const releaseDate = details.release_date || details.first_air_date || ""
  const runtime = details.runtime || (details.episode_run_time && details.episode_run_time[0]) || 0

  return (
    <Styled.DetailsContainer>
      <Navbar />

      {/* Hero Section */}
      <Styled.HeroSection>
        <Styled.HeroBackground
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
          }}
        >
          <Styled.HeroOverlay />
        </Styled.HeroBackground>

        <Styled.HeroContent>
          <Styled.BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </Styled.BackButton>

          <Styled.HeroInfo>
            <Styled.PosterContainer>
              <Styled.PosterImage src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={title} />
            </Styled.PosterContainer>

            <Styled.InfoContainer>
              <Styled.Title>{title}</Styled.Title>

              {details.tagline && <Styled.Tagline>"{details.tagline}"</Styled.Tagline>}

              <Styled.MetadataContainer>
                <Styled.MetadataItem>
                  <Star className="fill-current" size={16} />
                  <span>{details.vote_average.toFixed(1)}</span>
                  <span>({details.vote_count.toLocaleString()} votos)</span>
                </Styled.MetadataItem>

                <Styled.MetadataItem>
                  <Calendar size={16} />
                  <span>{new Date(releaseDate).getFullYear()}</span>
                </Styled.MetadataItem>

                {runtime > 0 && (
                  <Styled.MetadataItem>
                    <Clock size={16} />
                    <span>{formatRuntime(runtime)}</span>
                  </Styled.MetadataItem>
                )}

                {!isMovie && details.number_of_seasons && (
                  <Styled.MetadataItem>
                    <span>{details.number_of_seasons} temporada(s)</span>
                  </Styled.MetadataItem>
                )}
              </Styled.MetadataContainer>

              <Styled.GenresContainer>
                {details.genres.map((genre) => (
                  <Styled.GenreBadge key={genre.id}>{genre.name}</Styled.GenreBadge>
                ))}
              </Styled.GenresContainer>

              <Styled.Overview>{details.overview}</Styled.Overview>

              <Styled.ActionsContainer>
                <Styled.PrimaryButton>
                  <Play size={20} />
                  <span>Assistir</span>
                </Styled.PrimaryButton>

                <Styled.SecondaryButton>
                  <Plus size={20} />
                  <span>Minha Lista</span>
                </Styled.SecondaryButton>

                <Styled.IconButton>
                  <Heart size={20} />
                </Styled.IconButton>

                <Styled.IconButton>
                  <Share2 size={20} />
                </Styled.IconButton>
              </Styled.ActionsContainer>

              {getDirector() && (
                <Styled.DirectorInfo>
                  <strong>Direção:</strong> {getDirector()?.name}
                </Styled.DirectorInfo>
              )}
            </Styled.InfoContainer>
          </Styled.HeroInfo>
        </Styled.HeroContent>
      </Styled.HeroSection>

      <Styled.ContentContainer>
        {videos.length > 0 && (
          <Styled.Section>
            <Styled.SectionTitle>Trailer</Styled.SectionTitle>
            <Styled.VideoContainer>
              <Styled.VideoPlayer>
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${selectedVideo?.key}`}
                  title={selectedVideo?.name}
                  frameBorder="0"
                  allowFullScreen
                />
              </Styled.VideoPlayer>

              {videos.length > 1 && (
                <Styled.VideoList>
                  {videos.map((video) => (
                    <Styled.VideoItem
                      key={video.id}
                      active={selectedVideo?.id === video.id}
                      onClick={() => setSelectedVideo(video)}
                    >
                      {video.name}
                    </Styled.VideoItem>
                  ))}
                </Styled.VideoList>
              )}
            </Styled.VideoContainer>
          </Styled.Section>
        )}

        {cast.length > 0 && (
          <Styled.Section>
            <Styled.SectionTitle>Elenco</Styled.SectionTitle>
            <Styled.CastContainer>
              <Slider {...carouselSettings}>
                {cast.map((member) => (
                  <Styled.CastItem key={member.id}>
                    <Styled.CastCard>
                      <Styled.CastImage
                        src={
                          member.profile_path
                            ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                            : "/placeholder.svg?height=278&width=185"
                        }
                        alt={member.name}
                      />
                      <Styled.CastInfo>
                        <Styled.CastName>{member.name}</Styled.CastName>
                        <Styled.CastCharacter>{member.character}</Styled.CastCharacter>
                      </Styled.CastInfo>
                    </Styled.CastCard>
                  </Styled.CastItem>
                ))}
              </Slider>
            </Styled.CastContainer>
          </Styled.Section>
        )}

        <Styled.Section>
          <Styled.SectionTitle>Informações Adicionais</Styled.SectionTitle>
          <Styled.InfoGrid>
            <Styled.InfoItem>
              <Styled.InfoLabel>Status:</Styled.InfoLabel>
              <Styled.InfoValue>{details.status}</Styled.InfoValue>
            </Styled.InfoItem>

            {details.spoken_languages.length > 0 && (
              <Styled.InfoItem>
                <Styled.InfoLabel>Idiomas:</Styled.InfoLabel>
                <Styled.InfoValue>{details.spoken_languages.map((lang) => lang.name).join(", ")}</Styled.InfoValue>
              </Styled.InfoItem>
            )}

            {isMovie && details.budget && details.budget > 0 && (
              <Styled.InfoItem>
                <Styled.InfoLabel>Orçamento:</Styled.InfoLabel>
                <Styled.InfoValue>{formatCurrency(details.budget)}</Styled.InfoValue>
              </Styled.InfoItem>
            )}

            {isMovie && details.revenue && details.revenue > 0 && (
              <Styled.InfoItem>
                <Styled.InfoLabel>Bilheteria:</Styled.InfoLabel>
                <Styled.InfoValue>{formatCurrency(details.revenue)}</Styled.InfoValue>
              </Styled.InfoItem>
            )}

            {!isMovie && details.number_of_episodes && (
              <Styled.InfoItem>
                <Styled.InfoLabel>Episódios:</Styled.InfoLabel>
                <Styled.InfoValue>{details.number_of_episodes}</Styled.InfoValue>
              </Styled.InfoItem>
            )}
          </Styled.InfoGrid>
        </Styled.Section>

        {recommendations.length > 0 && (
          <Styled.Section>
            <Styled.SectionTitle>Recomendações</Styled.SectionTitle>
            <Styled.RecommendationsContainer>
              <Slider {...carouselSettings}>
                {recommendations.map((item) => (
                  <Styled.RecommendationItem key={item.id}>
                    <Styled.RecommendationCard
                      onClick={() => navigate(`/details/${item.title ? "movie" : "tv"}/${item.id}`)}
                    >
                      <Styled.RecommendationImage
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        alt={item.title || item.name}
                      />
                      <Styled.RecommendationInfo>
                        <Styled.RecommendationTitle>{item.title || item.name}</Styled.RecommendationTitle>
                        <Styled.RecommendationRating>
                          <Star size={12} className="fill-current" />
                          <span>{item.vote_average.toFixed(1)}</span>
                        </Styled.RecommendationRating>
                      </Styled.RecommendationInfo>
                    </Styled.RecommendationCard>
                  </Styled.RecommendationItem>
                ))}
              </Slider>
            </Styled.RecommendationsContainer>
          </Styled.Section>
        )}
      </Styled.ContentContainer>
    </Styled.DetailsContainer>
  )
}
