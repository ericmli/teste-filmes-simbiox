import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8080/tmdb",
})

export const getMovies = (page = 1, type = "movie", category = "popular") => {
  return api.get(`/movies`, {
    params: { page, type, category }
  })
}

export const getTrending = (timeWindow = "week") => {
  return api.get(`/trending`, {
    params: { timeWindow }
  })
}

export const getDetails = (id: number, type = "movie") => {
  return api.get(`/details`, {
    params: { id, type }
  })
}

export const getCredits = (id: number, type = "movie") => {
  return api.get(`/credits`, {
    params: { id, type }
  })
}

export const getVideos = (id: number, type = "movie") => {
  return api.get(`/videos`, {
    params: { id, type }
  })
}

export const getRecommendations = (id: number, type = "movie") => {
  return api.get(`/recommendations`, {
    params: { id, type }
  })
}

export const searchMulti = (query: string, page = 1) => {
  return api.get(`/search`, {
    params: { query, page }
  })
}
