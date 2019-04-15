import { Component } from '@angular/core';
import { PlanetService } from './../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public planet: Planet;
  public numFilms = 0;

  constructor(private planetService: PlanetService) {
    this.getPlanet();
  }

  getRandomNum(): number {
    // generate random number between 1 and 61;
    return Math.floor(Math.random() * 60 + 1);
  }

  getPlanet() {
    try {
      const result = this.planetService.fethPlanets(this.getRandomNum());
      result.subscribe(data => {
        this.planet = data;
        console.log('planet', this.planet);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
