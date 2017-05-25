import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
	providers: [UsersService, CounterService],
	selector: 'services-assignment',
	templateUrl: './services-assignment.component.html',
	styleUrls: ['./services-assignment.component.css']
})
export class ServicesAssignmentComponent {

	constructor (private usersService: UsersService) {}

}
