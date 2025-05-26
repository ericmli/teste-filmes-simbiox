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
  return api.get(`/details/${type}/${id}`);
};

export const getCredits = (id: number, type = "movie") => {
  return api.get(`/credits/${type}/${id}`);
};

export const getVideos = (id: number, type = "movie") => {
  return api.get(`/videos/${type}/${id}`);
};

export const getRecommendations = (id: number, type = "movie") => {
  return api.get(`/recommendations/${type}/${id}`);
};

export const searchMulti = (query: string, page = 1) => {
  return api.get(`/search`, {
    params: { query, page }
  })
}
