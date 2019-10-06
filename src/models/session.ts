import { Target } from '../models/target';
import { Trainer } from '../models/trainer';

export class Session {
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public equipment: string,
		public image: string,
		public trainer: Trainer,
		public targets: Target[],
		public calories: number,
		public start_date: string,
		public end_date: string,
		public start_time: string,
		public end_time: string,
		public level: number,
		public price: string,
		public day: string,
		public zoom: string,
		public registeredstudents: number[]
	){}
}
