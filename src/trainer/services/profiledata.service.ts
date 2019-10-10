import { Injectable } from '@angular/core';
import { Trainer } from '../../models/trainer';
import { TrainerService } from './trainer.service';


//ProfileDataService - responsible for tracking current user data
@Injectable()
export class ProfileDataService {

  private trainerData: Trainer;
  private profileCreated = false;

  constructor(public trainerService: TrainerService) {
  }

  public updateTrainerProfile(trainerName: string, trainerDescription: string, trainerExperience: string, trainerSpecialization: string) {
    let newProfileData = new Trainer(4, "assets/imgs/Nathan.jpg", trainerName, trainerDescription, trainerExperience, trainerSpecialization)
    this.trainerData = newProfileData;
    this.trainerService.addTrainer(newProfileData);
    this.profileCreate();
  }

  public getTrainerProfile(): Trainer {
    return this.trainerData;
  }

  public getTrainerid(): number {
    return this.trainerData.id;
  }

  public profileCreate() {
    this.profileCreated = true;
  }

  public isProfileCreated() {
    return this.profileCreated;
  }
}
