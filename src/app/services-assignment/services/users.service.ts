import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

	public activeUsers = ['Max', 'Anna'];
	public inactiveUsers = ['Chris', 'Manu'];

	constructor (public counterService: CounterService) {}

	// NOTE: these two functions trigger the event
	public setToActive (value) {
		this.counterService.incrementInactiveToActiveCounter();

		this.activeUsers.push(value);
		this.inactiveUsers.splice(value, 1);
	}

	public setToInactive (value) {
		this.counterService.incrementActiveToInactiveCounter();

		this.inactiveUsers.push(value);
		this.activeUsers.splice(value, 1);
	}

}
