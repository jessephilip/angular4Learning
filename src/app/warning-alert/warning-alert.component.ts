import { Component } from '@angular/core';

@Component({
	selector: '[app-warning-alert]',
	templateUrl: './warning-alert.component.html',
	styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {

	// outputs to the DOM
	private _message = 'Warning!';
	public get message(): string { return this._message; }
	public set message(message: string) { this._message = message; }

}
