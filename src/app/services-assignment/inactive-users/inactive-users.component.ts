import { UsersService } from '../services/users.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
	private inactiveUsers = this.usersService.inactiveUsers;

	constructor (private usersService: UsersService) { }

	onSetToActive(id: number) {
		this.usersService.setToActive(this.inactiveUsers[id]);
	}
}
