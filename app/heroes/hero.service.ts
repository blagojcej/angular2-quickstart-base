/**
 * Created by Blagojce on 30.9.2016.
 */
import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';
@Injectable()
export class HeroService {
  getHeroes() { return HEROES;  }
}
