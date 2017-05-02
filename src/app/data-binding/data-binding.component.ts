import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	serverElements = [
		{type:'server', name:'Testserver', content:'Just a test.'},
		{type:'server', name:'Development Server', content:'For development.'},
		{type:'server', name:'Production Server', content:'For production.'},
	];


	onServerAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			type: 'server',
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
		this.serverElements.push({
			type: 'blueprint',
			name: blueprintData.blueprintName,
			content: blueprintData.blueprintContent
		});
	}
}
