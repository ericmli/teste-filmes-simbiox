package br.com.simbiox.simbioxfilms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.simbiox.simbioxfilms.service.TMDBService;

@RestController
@RequestMapping("/tmdb")
public class MovieController {

    @Autowired
    private TMDBService tmdbService;

    @GetMapping("/movies")
    public ResponseEntity<?> getMovies(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "movie") String type,
            @RequestParam(defaultValue = "popular") String category) {
        return ResponseEntity.ok(tmdbService.getMovies(page, type, category));
    }

    @GetMapping("/trending")
    public ResponseEntity<?> getTrending(@RequestParam(defaultValue = "week") String timeWindow) {
        return ResponseEntity.ok(tmdbService.getTrending(timeWindow));
    }

    @GetMapping("/details/{type}/{id}")
    public ResponseEntity<?> getDetails(@PathVariable String type, @PathVariable int id) {
        return ResponseEntity.ok(tmdbService.getDetails(id, type));
    }

    @GetMapping("/credits/{type}/{id}")
    public ResponseEntity<?> getCredits(@PathVariable String type, @PathVariable int id) {
        return ResponseEntity.ok(tmdbService.getCredits(id, type));
    }

    @GetMapping("/videos/{type}/{id}")
    public ResponseEntity<?> getVideos(@PathVariable String type, @PathVariable int id) {
        return ResponseEntity.ok(tmdbService.getVideos(id, type));
    }

    @GetMapping("/recommendations/{type}/{id}")
    public ResponseEntity<?> getRecommendations(@PathVariable String type, @PathVariable int id) {
        return ResponseEntity.ok(tmdbService.getRecommendations(id, type));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchMulti(@RequestParam String query, @RequestParam(defaultValue = "1") int page) {
        return ResponseEntity.ok(tmdbService.searchMulti(query, page));
    }
}
