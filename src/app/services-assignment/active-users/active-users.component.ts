import { Component } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-active-users',
	templateUrl: './active-users.component.html',
	styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
	private activeUsers = this.usersService.activeUsers;

	constructor (private usersService: UsersService) {}

	onSetToInactive(id: number) {
		this.usersService.setToInactive(this.activeUsers[id]);
	}
}
