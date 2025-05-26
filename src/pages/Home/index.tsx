import { useState, useEffect, useRef } from "react"
import { Play, Info, Star, TrendingUp, Clock, Calendar } from "lucide-react"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import { getMovies, getTrending } from "../../api/tmdb"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as Styled from "./styles"

interface Movie {
  id: number
  title: string
  rating: number
  year: string | number
  image: string
}

interface FeaturedContent {
  id: number
  title: string
  description: string
  rating: number
  year: number | string
  duration?: string
  genre: string[]
  image: string
  logo?: string
  backdrop_path?: string
}

export const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0)
  const [trendingMoviesData, setTrendingMoviesData] = useState<Movie[]>([])
  const [popularSeriesData, setPopularSeriesData] = useState<Movie[]>([])
  const [newReleasesData, setNewReleasesData] = useState<Movie[]>([])
  const [featuredContent, setFeaturedContent] = useState<FeaturedContent[]>([])
  const [isLoadingFeatured, setIsLoadingFeatured] = useState<boolean>(true)

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
  }

  const trendingSliderRef = useRef<Slider | null>(null)
  const seriesSliderRef = useRef<Slider | null>(null)
  const releasesSliderRef = useRef<Slider | null>(null)

  useEffect(() => {
    setIsLoadingFeatured(true)
    getTrending()
      .then((response) => {
        
        const filteredResults = response.data.results
          .filter((item: any) => item.backdrop_path && item.overview && item.overview.length > 100)
          .slice(0, 5)

        const formattedFeatured = filteredResults.map((item: any) => {
          const isMovie = item.media_type === "movie"

          return {
            id: item.id,
            title: isMovie ? item.title : item.name,
            description: item.overview,
            rating: item.vote_average,
            year: isMovie
              ? item.release_date
                ? new Date(item.release_date).getFullYear()
                : ""
              : item.first_air_date
                ? new Date(item.first_air_date).getFullYear()
                : "",
            duration: isMovie ? "Filme" : "Série",
            genre: item.genre_ids,
            image: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
            backdrop_path: item.backdrop_path,
          }
        })

        setFeaturedContent(formattedFeatured)
        setIsLoadingFeatured(false)
      })
      .catch((error) => {
        console.error("Erro ao buscar destaques:", error)
        setIsLoadingFeatured(false)
      })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (featuredContent.length > 0) {
        setCurrentBannerIndex((prev) => (prev + 1) % featuredContent.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredContent])

  useEffect(() => {
    getMovies(1)
      .then((response) => {
        const formattedMovies = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          year: movie.release_date ? new Date(movie.release_date).getFullYear() : "",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "/placeholder.svg?height=400&width=300",
        }))

        setTrendingMoviesData(formattedMovies)
      })
      .catch((error) => console.error("Erro ao buscar filmes em alta:", error))
  }, [])

  useEffect(() => {
    getMovies(1, "tv")
      .then((response) => {
        const formattedSeries = response.data.results.map((series: any) => ({
          id: series.id,
          title: series.name,
          rating: series.vote_average,
          year: series.first_air_date ? new Date(series.first_air_date).getFullYear() : "",
          image: series.poster_path
            ? `https://image.tmdb.org/t/p/w300${series.poster_path}`
            : "/placeholder.svg?height=400&width=300",
        }))

        setPopularSeriesData(formattedSeries)
      })
      .catch((error) => console.error("Erro ao buscar séries populares:", error))
  }, [])

  useEffect(() => {
    getMovies(1, "movie", "upcoming")
      .then((response) => {
        const formattedReleases = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          year: movie.release_date ? new Date(movie.release_date).getFullYear() : "",
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "/placeholder.svg?height=400&width=300",
        }))

        setNewReleasesData(formattedReleases)
      })
      .catch((error) => console.error("Erro ao buscar lançamentos recentes:", error))
  }, [])

  const renderBanner = () => {
    if (isLoadingFeatured) {
      return (
        <Styled.HeroBanner>
          <Styled.LoadingContainer>
            <div>Carregando destaques...</div>
          </Styled.LoadingContainer>
        </Styled.HeroBanner>
      )
    }

    if (featuredContent.length === 0) {
      return null
    }

    const currentFeatured = featuredContent[currentBannerIndex]

    return (
      <Styled.HeroBanner>
        <Styled.HeroBackground style={{ backgroundImage: `url(${currentFeatured.image})` }}>
          <Styled.HeroGradientOverlay />
          <Styled.HeroBottomGradient />
        </Styled.HeroBackground>

        <Styled.HeroContent>
          <Styled.HeroInfoContainer>
            <Styled.HeroTitle>{currentFeatured.title}</Styled.HeroTitle>

            <Styled.HeroMetadata>
              <Styled.RatingContainer>
                <Star className="fill-current" size={16} />
                <span>{currentFeatured.rating.toFixed(1)}</span>
              </Styled.RatingContainer>
              <Styled.MetadataItem>{currentFeatured.year}</Styled.MetadataItem>
              <Styled.MetadataItem>{currentFeatured.duration}</Styled.MetadataItem>
            </Styled.HeroMetadata>

            <Styled.HeroDescription>{currentFeatured.description.slice(0, 300)}</Styled.HeroDescription>

            <Styled.ButtonContainer>
              <Styled.PrimaryButton>
                <Play size={20} />
                <span>Assistir</span>
              </Styled.PrimaryButton>
              <Styled.SecondaryButton>
                <Info size={20} />
                <span>Mais Informações</span>
              </Styled.SecondaryButton>
            </Styled.ButtonContainer>
          </Styled.HeroInfoContainer>
        </Styled.HeroContent>

        <Styled.BannerDots>
          {featuredContent.map((_, index) => (
            <Styled.BannerDot
              key={index}
              active={index === currentBannerIndex}
              onClick={() => setCurrentBannerIndex(index)}
            />
          ))}
        </Styled.BannerDots>
      </Styled.HeroBanner>
    )
  }

  return (
    <Styled.HomeContainer>
      <Navbar />

      {renderBanner()}

      <Styled.ContentContainer>
        <Styled.Section>
          <Styled.SectionHeader>
            <TrendingUp size={24} color="#e50914" />
            <Styled.SectionTitle>Filmes em Alta</Styled.SectionTitle>
          </Styled.SectionHeader>

          <Styled.SliderContainer>
            <Slider ref={trendingSliderRef} {...carouselSettings}>
              {trendingMoviesData.map((movie) => (
                <Styled.SliderItem key={movie.id}>
                  <Link to={`/details/movie/${movie.id}`}>
                    <Styled.MediaCard>
                      <Styled.MediaImageContainer>
                        <Styled.MediaImage src={movie.image} alt={movie.title} />
                        <Styled.MediaImageOverlay />
                        <Styled.MediaRating>
                          <Star size={12} className="fill-current" />
                          <span>{movie.rating.toFixed(1)}</span>
                        </Styled.MediaRating>
                      </Styled.MediaImageContainer>
                      <Styled.MediaInfo>
                        <Styled.MediaTitle>{movie.title}</Styled.MediaTitle>
                        <Styled.MediaYear>{movie.year}</Styled.MediaYear>
                      </Styled.MediaInfo>
                    </Styled.MediaCard>
                  </Link>
                </Styled.SliderItem>
              ))}
            </Slider>
          </Styled.SliderContainer>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionHeader>
            <Calendar size={24} color="#3b82f6" />
            <Styled.SectionTitle>Séries Populares</Styled.SectionTitle>
          </Styled.SectionHeader>

          <Styled.SliderContainer>
            <Slider ref={seriesSliderRef} {...carouselSettings}>
              {popularSeriesData.map((series) => (
                <Styled.SliderItem key={series.id}>
                  <Link to={`/details/series/${series.id}`}>
                    <Styled.MediaCard>
                      <Styled.MediaImageContainer>
                        <Styled.MediaImage src={series.image} alt={series.title} />
                        <Styled.MediaImageOverlay />
                        <Styled.MediaRating>
                          <Star size={12} className="fill-current" />
                          <span>{series.rating.toFixed(1)}</span>
                        </Styled.MediaRating>
                      </Styled.MediaImageContainer>
                      <Styled.MediaInfo>
                        <Styled.MediaTitle>{series.title}</Styled.MediaTitle>
                        <Styled.MediaYear>{series.year}</Styled.MediaYear>
                      </Styled.MediaInfo>
                    </Styled.MediaCard>
                  </Link>
                </Styled.SliderItem>
              ))}
            </Slider>
          </Styled.SliderContainer>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionHeader>
            <Clock size={24} color="#10b981" />
            <Styled.SectionTitle>Lançamentos Recentes</Styled.SectionTitle>
          </Styled.SectionHeader>

          <Styled.SliderContainer>
            <Slider ref={releasesSliderRef} {...carouselSettings}>
              {newReleasesData.map((item) => (
                <Styled.SliderItem key={item.id}>
                  <Link to={`/details/movie/${item.id}`}>
                    <Styled.MediaCard>
                      <Styled.MediaImageContainer>
                        <Styled.MediaImage src={item.image} alt={item.title} />
                        <Styled.MediaImageOverlay />
                        <Styled.NewBadge>NOVO</Styled.NewBadge>
                        <Styled.MediaRating>
                          <Star size={12} className="fill-current" />
                          <span>{item.rating.toFixed(1)}</span>
                        </Styled.MediaRating>
                      </Styled.MediaImageContainer>
                      <Styled.MediaInfo>
                        <Styled.MediaTitle>{item.title}</Styled.MediaTitle>
                        <Styled.MediaYear>{item.year}</Styled.MediaYear>
                      </Styled.MediaInfo>
                    </Styled.MediaCard>
                  </Link>
                </Styled.SliderItem>
              ))}
            </Slider>
          </Styled.SliderContainer>
        </Styled.Section>
      </Styled.ContentContainer>
    </Styled.HomeContainer>
  )
}
