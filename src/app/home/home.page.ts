import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public population: string;
  public climate: string;
  public terrain: string;
  public numFilms: number;
  public auxNum: number;

  ngOnInit() {
    this.getPlanet();
  }

  getRandomNum() {
    // generate random number between 0 and 61;
    return Math.floor(Math.random() * 61);
  }

  getPlanet() {
    const rnd = this.getRandomNum();

    if (this.auxNum !== rnd) {
      this.auxNum = rnd;
      // do shit
    } else {
      // re-run getRandomNum, avoid to display the same planet multiple times in a row;
      this.getPlanet();
    }

    console.log('getPlanet', rnd);
  }
}
