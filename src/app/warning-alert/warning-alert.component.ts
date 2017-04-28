import { Component, OnInit } from '@angular/core';

@Component({
	selector: '[app-warning-alert]',
	templateUrl: './warning-alert.component.html',
	styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	// outputs to the DOM
	private _message: string = "Warning!";
	public get message():string {
		return this._message;
	}
	public set message(message:string) {
		this._message = message;
	}

}
