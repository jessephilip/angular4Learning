import { Component, OnInit } from '@angular/core';

import { ServerComponent } from '../server/server.component';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

	private _allowNewServer: boolean = false;
	public get allowNewServer():boolean { return this._allowNewServer; }
	public set allowNewServer(allow:boolean) { this._allowNewServer = allow; }

	private _serverCreationStatus:string = 'No server was created.';
	public get serverCreationStatus():string { return this._serverCreationStatus; }
	public set serverCreationStatus(status:string) { this._serverCreationStatus = status; }

	private _serverName:string = 'placeholder';
	public get serverName():string { return this._serverName; }
	public set serverName(name:string) { this._serverName = name; }


	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

	ngOnInit() {}

	public onCreateServer() {
		this.serverCreationStatus = `${this.serverName} server was created!`;
	}

	public onUpdateServerName(event: Event) { this.serverName = (<HTMLInputElement>event.target).value; }

}
