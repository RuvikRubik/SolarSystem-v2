package com.example.SolarSystem.Encja;

import jakarta.persistence.*;

@Entity
@Table(name = "CELESTIALOBJECTS")
public class CelestialObject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nazwa", nullable = false)
    private String nazwa;

    @Column(name = "Typ", nullable = false)
    private String typ;

    @Column(name = "Średnica")
    private Double srednica;

    @Column(name = "Okres_obiegu")
    private Double okresObiegu;

    @Column(name = "Średnia_odległość")
    private Double sredniaOdleglosc;

    @Column(name = "Masa")
    private Double masa;

    @Column(name = "Temperatura")
    private Double temperatura;

    @Column(name = "Skład_atmosfery")
    private String skladAtmosfery;

    @Column(name = "KSIĘŻYCE")
    private Long Ksiezyce;

    @ManyToOne
    @JoinColumn(name = "KSIĘŻYCE", referencedColumnName = "ID", insertable = false, updatable = false)
    private CelestialObject ksiezyc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
    }

    public Double getSrednica() {
        return srednica;
    }

    public void setSrednica(Double srednica) {
        this.srednica = srednica;
    }

    public Double getOkresObiegu() {
        return okresObiegu;
    }

    public void setOkresObiegu(Double okresObiegu) {
        this.okresObiegu = okresObiegu;
    }

    public Double getSredniaOdleglosc() {
        return sredniaOdleglosc;
    }

    public void setSredniaOdleglosc(Double sredniaOdleglosc) {
        this.sredniaOdleglosc = sredniaOdleglosc;
    }

    public Double getMasa() {
        return masa;
    }

    public void setMasa(Double masa) {
        this.masa = masa;
    }

    public Double getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(Double temperatura) {
        this.temperatura = temperatura;
    }

    public String getSkladAtmosfery() {
        return skladAtmosfery;
    }

    public void setSkladAtmosfery(String skladAtmosfery) {
        this.skladAtmosfery = skladAtmosfery;
    }

    public Long getKsiezyce() {
        return Ksiezyce;
    }

    public void setKsiezyce(Long idKsiezyca) {
        this.Ksiezyce = idKsiezyca;
    }

    public CelestialObject getKsiezyc() {
        return ksiezyc;
    }

    public void setKsiezyc(CelestialObject ksiezyc) {
        this.ksiezyc = ksiezyc;
    }
}