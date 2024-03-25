package com.example.SolarSystem.Controller;

import com.example.SolarSystem.Encja.CelestialObject;
import com.example.SolarSystem.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }
    @Autowired
    private Repository repository;

    @GetMapping("/sun.html")
    public String sun(Model model) {
        model.addAttribute("example",repository.findByNazwa("Słońce"));
        return "sun.html";
    }

    @GetMapping("/earth.html")
    public String earth(Model model) {
        model.addAttribute("example",repository.findByNazwa("Ziemia"));
        return "earth.html";
    }

    @GetMapping("/moon.html")
    public String moon(Model model) {
        model.addAttribute("example",repository.findByNazwa("Księżyc"));
        return "earth.html";
    }

    @GetMapping("/mercury.html")
    public String mercury(Model model) {
        model.addAttribute("example",repository.findByNazwa("Merkury"));
        return "mercury.html";
    }

    @GetMapping("/venus.html")
    public String venus(Model model) {
        model.addAttribute("example",repository.findByNazwa("Wenus"));
        return "venus.html";
    }

    @GetMapping("/mars.html")
    public String mars(Model model) {
        model.addAttribute("example",repository.findByNazwa("Mars"));
        return "mars.html";
    }

    @GetMapping("/jupiter.html")
    public String jupiter(Model model) {
        model.addAttribute("example",repository.findByNazwa("Jowisz"));
        return "jupiter.html";
    }

    @GetMapping("/saturn.html")
    public String saturn(Model model) {
        model.addAttribute("example",repository.findByNazwa("Saturn"));
        return "saturn.html";
    }

    @GetMapping("/uranus.html")
    public String uranus(Model model) {
        model.addAttribute("example",repository.findByNazwa("Uran"));
        return "uranus.html";
    }

    @GetMapping("/neptune.html")
    public String neptune(Model model) {
        model.addAttribute("example",repository.findByNazwa("Neptun"));
        return "neptune.html";
    }

    @GetMapping("/pluto.html")
    public String pluto(Model model) {
        model.addAttribute("example",repository.findByNazwa("Pluton"));
        return "pluto.html";
    }
}