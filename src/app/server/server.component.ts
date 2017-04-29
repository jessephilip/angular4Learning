import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent {

	constructor() {
		this.status = Math.random() > 0.5 ? 'online' : 'offline';
	}

	private _title:string = 'app-server';
	get title():string { return this._title; }
	set title(title:string) { this._title = title; }

	private _id:number = Math.floor(Math.random() * 10) + 1;
	public get id():number { return this._id; }
	public set id(id:number) { this._id = id; }

	private _status:string = 'online';
	public get status():string { return this._status; }
	public set status(status:string) { this._status = status; }

	public getColor() { return this.status === 'online' ? 'green' : 'red'; }

}
