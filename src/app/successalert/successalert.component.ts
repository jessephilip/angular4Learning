import { Component, OnInit } from '@angular/core';

@Component({
	selector: '[app-successalert]',
	templateUrl: './successalert.component.html',
	styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	// outputs to the DOM
	private _message: string = "Success!";
	public get message():string {
		return this._message;
	}
	public set message(message:string) {
		this._message = message;
	}

}
