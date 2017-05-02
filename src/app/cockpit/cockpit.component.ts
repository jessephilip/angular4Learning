import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

	@Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>()
	@Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName:string, blueprintContent:string}>()

	newServerName = '';
	newServerContent = '';

	constructor() { }

	ngOnInit() {}

	onAddServer(serverName) {
		this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
	}

	onAddBlueprint(serverName) {
		this.blueprintCreated.emit({blueprintName: serverName.value, blueprintContent: this.newServerContent});
	}
}
