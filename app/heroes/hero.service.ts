/**
 * Created by Blagojce on 30.9.2016.
 */
import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';
import { Logger }     from '../logger.service';
@Injectable()
export class HeroService {
  constructor(private logger: Logger) {  }
  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}
