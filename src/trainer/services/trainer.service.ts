import { Injectable } from '@angular/core';
import { Trainer } from '../../models/trainer';
import trainerData from '../../user/data/trainer-data';


//ProfileDataService - responsible for tracking current user data
@Injectable()
export class TrainerService {

  public allTrainers: Trainer[];

  constructor() {
    this.allTrainers = trainerData;
  }


  public addTrainer(newtrainer: Trainer) {
    this.allTrainers.push(newtrainer);
  }

  public getallTrainers(): Trainer[] {
    return this.allTrainers;
  }

  public getTrainer(id: number): Trainer {
    return this.allTrainers[id];
  }

}
