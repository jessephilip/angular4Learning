import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	styleUrls: ['./server.component.css'],
	templateUrl: './server.component.html'
})

export class ServerComponent {
	private _title: string;
	private _id: number = Math.floor(Math.random() * 10) + 1;
	private _status = 'online';

	constructor() {
		this.status = Math.random() > 0.5 ? 'online' : 'offline';
	}

	get title(): string { return this._title; }
	set title(title: string) { this._title = title; }

	public get id(): number { return this._id; }
	public set id(id: number) { this._id = id; }

	public get status(): string { return this._status; }
	public set status(status: string) { this._status = status; }

	public getColor() { return this.status === 'online' ? 'green' : 'red'; }

}
