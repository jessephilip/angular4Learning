import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-assignment2',
	templateUrl: './assignment2.component.html',
	styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

	private _username:string = '';
	public get username():string { return this._username; }
	public set username(name:string) { this._username = name; }

	constructor() { }

	ngOnInit() { }


}
