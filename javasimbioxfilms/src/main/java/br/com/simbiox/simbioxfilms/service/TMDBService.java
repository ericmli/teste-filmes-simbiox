package br.com.simbiox.simbioxfilms.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TMDBService {

    private final String API_KEY = System.getenv("TMDB_API_KEY");
    private final String BASE_URL = "https://api.themoviedb.org/3";
    private final RestTemplate restTemplate = new RestTemplate();

    public Object getMovies(int page, String type, String category) {
        String url = String.format("%s/%s/%s?api_key=%s&language=pt-BR&page=%d", BASE_URL, type, category, API_KEY, page);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object getTrending(String timeWindow) {
        String url = String.format("%s/trending/all/%s?api_key=%s&language=pt-BR", BASE_URL, timeWindow, API_KEY);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object getDetails(int id, String type) {
        String url = String.format("%s/%s/%d?api_key=%s&language=pt-BR", BASE_URL, type, id, API_KEY);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object getCredits(int id, String type) {
        String url = String.format("%s/%s/%d/credits?api_key=%s&language=pt-BR", BASE_URL, type, id, API_KEY);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object getVideos(int id, String type) {
        String url = String.format("%s/%s/%d/videos?api_key=%s&language=pt-BR", BASE_URL, type, id, API_KEY);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object getRecommendations(int id, String type) {
        String url = String.format("%s/%s/%d/recommendations?api_key=%s&language=pt-BR", BASE_URL, type, id, API_KEY);
        return restTemplate.getForObject(url, Object.class);
    }

    public Object searchMulti(String query, int page) {
        String url = String.format("%s/search/multi?api_key=%s&language=pt-BR&query=%s&page=%d", BASE_URL, API_KEY, query, page);
        return restTemplate.getForObject(url, Object.class);
    }
}

