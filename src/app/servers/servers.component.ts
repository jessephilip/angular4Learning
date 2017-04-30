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

	private _serverCreationStatus:string = '';
	public get serverCreationStatus():string { return this._serverCreationStatus; }
	public set serverCreationStatus(status:string) { this._serverCreationStatus = status; }

	private _serverName:string = 'placeholder';
	public get serverName():string { return this._serverName; }
	public set serverName(name:string) { this._serverName = name; }

	private _serverCreated:boolean = false;
	public get serverCreated():boolean { return this._serverCreated; }
	public set serverCreated(status:boolean) { this._serverCreated = status ; }

	private _servers:Array<any> = ['Test Server', 'Development Server', 'Production Server'];
	public get servers():Array<any> { return this._servers; }
	public set servers(servers:Array<any>) { this._servers = servers ; }


	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

	ngOnInit() {}

	public onCreateServer() {
		// this.serverCreationStatus = `${this.serverName} server was created!`;
		this.serverCreated = true;
		this.servers.push(this.serverName);
	}

	public onUpdateServerName(event: Event) { this.serverName = (<HTMLInputElement>event.target).value; }

}
