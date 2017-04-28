import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent {
	private _title:string = 'app-server';
	get title():string {
		return this._title;
	}
	set title(title:string) {
		this._title = title;
	}

	private _id:number = 10;
	public get id():number { return this._id; }
	public set id(id:number) { this._id = id; }

	private _status:string = 'online';
	public get status():string { return this._status; }
	public set status(status:string) { this._status = status; }

}
