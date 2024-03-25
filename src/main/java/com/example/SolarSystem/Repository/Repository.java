package com.example.SolarSystem.Repository;

import com.example.SolarSystem.Encja.CelestialObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<CelestialObject, Long> {

    CelestialObject findByNazwa(String nazwa);
}