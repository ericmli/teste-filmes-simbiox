import { useState, useEffect } from "react"
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { Star, Calendar, Play, Info, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "../../components/Navbar"
import { getMovies } from "../../api/tmdb"

import * as Styled from "./styles.ts"

interface MediaItem {
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
  genre_ids: number[]
}

interface ApiResponse {
  page: number
  results: MediaItem[]
  total_pages: number
  total_results: number
}

export const Category = () => {
  const { type } = useParams<{ type: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const [items, setItems] = useState<MediaItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<MediaItem | null>(null)

  const isMovie = type === "movie"
  const mediaType = isMovie ? "movie" : "tv"
  const pageTitle = isMovie ? "Filmes" : "Séries"

  useEffect(() => {
    const page = Number.parseInt(searchParams.get("page") || "1")
    setCurrentPage(page)
  }, [searchParams])

  useEffect(() => {
    if (!type) return

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await getMovies(currentPage, mediaType, "popular")
        const data: ApiResponse = response.data

        setItems(data.results)
        setTotalPages(data.total_pages)
        setTotalResults(data.total_results)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [type, currentPage, mediaType])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setSearchParams({ page: page.toString() })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleItemClick = (item: MediaItem) => {
    navigate(`/details/${type}/${item.id}`)
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (isLoading) {
    return (
      <Styled.CategoryContainer>
        <Navbar />
        <Styled.LoadingContainer>
          <Styled.LoadingSpinner />
          <p>Carregando {pageTitle.toLowerCase()}...</p>
        </Styled.LoadingContainer>
      </Styled.CategoryContainer>
    )
  }

  return (
    <Styled.CategoryContainer>
      <Navbar />

      <Styled.HeaderSection>
        <Styled.HeaderContent>

          <Styled.HeaderInfo>
            <Styled.PageTitle>{pageTitle}</Styled.PageTitle>
            <Styled.ResultsInfo>
              {totalResults.toLocaleString()} {isMovie ? "filmes" : "séries"} encontrados
            </Styled.ResultsInfo>
          </Styled.HeaderInfo>

          <Styled.TypeToggle>
            <Styled.TypeButton active={isMovie} onClick={() => navigate("/category/movie?page=1")}>
              Filmes
            </Styled.TypeButton>
            <Styled.TypeButton active={!isMovie} onClick={() => navigate("/category/series?page=1")}>
              Séries
            </Styled.TypeButton>
          </Styled.TypeToggle>
        </Styled.HeaderContent>
      </Styled.HeaderSection>

      <Styled.ContentContainer>
        <Styled.GridContainer>
          {items.map((item) => (
            <Styled.MediaCard
              key={item.id}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <Styled.MediaImageContainer>
                <Styled.MediaImage
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : "/placeholder.svg?height=750&width=500"
                  }
                  alt={item.title || item.name}
                />

                <Styled.MediaOverlay visible={hoveredItem?.id === item.id}>
                  <Styled.OverlayContent>
                    <Styled.OverlayTitle>{item.title || item.name}</Styled.OverlayTitle>

                    <Styled.OverlayMetadata>
                      <Styled.MetadataItem>
                        <Star className="fill-current" size={14} />
                        <span>{item.vote_average.toFixed(1)}</span>
                      </Styled.MetadataItem>

                      <Styled.MetadataItem>
                        <Calendar size={14} />
                        <span>
                          {item.release_date || item.first_air_date
                            ? new Date(item.release_date || item.first_air_date || "").getFullYear()
                            : "N/A"}
                        </span>
                      </Styled.MetadataItem>
                    </Styled.OverlayMetadata>

                    <Styled.OverlayDescription>{item.overview}</Styled.OverlayDescription>

                    <Styled.OverlayActions>
                      <Styled.ActionButton primary>
                        <Play size={16} />
                        <span>Assistir</span>
                      </Styled.ActionButton>

                      <Styled.ActionButton>
                        <Info size={16} />
                        <span>Detalhes</span>
                      </Styled.ActionButton>
                    </Styled.OverlayActions>
                  </Styled.OverlayContent>
                </Styled.MediaOverlay>

                <Styled.QuickInfo>
                  <Styled.Rating>
                    <Star size={12} className="fill-current" />
                    <span>{item.vote_average.toFixed(1)}</span>
                  </Styled.Rating>
                </Styled.QuickInfo>
              </Styled.MediaImageContainer>

              <Styled.MediaInfo>
                <Styled.MediaTitle>{item.title || item.name}</Styled.MediaTitle>
                <Styled.MediaYear>
                  {item.release_date || item.first_air_date
                    ? new Date(item.release_date || item.first_air_date || "").getFullYear()
                    : "N/A"}
                </Styled.MediaYear>
              </Styled.MediaInfo>
            </Styled.MediaCard>
          ))}
        </Styled.GridContainer>

        {/* Paginação */}
        <Styled.PaginationContainer>
          <Styled.PaginationInfo>
            Página {currentPage} de {totalPages}
          </Styled.PaginationInfo>

          <Styled.PaginationControls>
            <Styled.PaginationButton disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
              <ChevronLeft size={16} />
              Anterior
            </Styled.PaginationButton>

            <Styled.PaginationNumbers>
              {getVisiblePages().map((page, index) => (
                <Styled.PageNumber
                  key={index}
                  active={page === currentPage}
                  disabled={page === "..."}
                  onClick={() => typeof page === "number" && handlePageChange(page)}
                >
                  {page}
                </Styled.PageNumber>
              ))}
            </Styled.PaginationNumbers>

            <Styled.PaginationButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Próxima
              <ChevronRight size={16} />
            </Styled.PaginationButton>
          </Styled.PaginationControls>
        </Styled.PaginationContainer>
      </Styled.ContentContainer>
    </Styled.CategoryContainer>
  )
}
