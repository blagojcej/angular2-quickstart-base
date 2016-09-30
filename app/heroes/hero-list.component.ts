/**
 * Created by Blagojce on 30.9.2016.
 */
import { Component }   from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-list',
  providers:[HeroService],
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})
export class HeroListComponent {
  heroes : Hero[];

  constructor(heroService: HeroService){
    this.heroes=heroService.getHeroes();
  }
}
