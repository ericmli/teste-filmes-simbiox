import axios from "axios";

const key = import.meta.env.VITE_TMDB_KEY

export const getMovies = (page = 1, type = "movie", category = "popular") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${category}`, {
    params: {
      api_key: key,
      language: "pt-BR",
      page: page,
    },
  })
}

export const getTrending = (timeWindow = "week") => {
  return axios.get(`https://api.themoviedb.org/3/trending/all/${timeWindow}`, {
    params: {
      api_key: key,
      language: "pt-BR",
    },
  })
}

export const getDetails = (id: number, type = "movie") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
    params: {
      api_key: key,
      language: "pt-BR",
    },
  })
}

export const getCredits = (id: number, type = "movie") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
    params: {
      api_key: key,
      language: "pt-BR",
    },
  })
}

export const getVideos = (id: number, type = "movie") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
    params: {
      api_key: key,
      language: "pt-BR",
    },
  })
}

export const getRecommendations = (id: number, type = "movie") => {
  return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations`, {
    params: {
      api_key: key,
      language: "pt-BR",
    },
  })
}

export const searchMulti = (query: string, page = 1) => {
  return axios.get("https://api.themoviedb.org/3/search/multi", {
    params: {
      api_key: key,
      language: "pt-BR",
      query,
      page,
    },
  })
}
