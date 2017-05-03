import {
	AfterContentInit,
	AfterContentChecked,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.Emulated // none, native
})
export class ServerElementComponent implements
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	DoCheck,
	OnChanges,
	OnInit {

	// let name section for reference (demonstration)
	@Input('srvElement') element: {type:string, name:string, content:string};
	@Input() name: string;

	constructor() {
		console.log('constructor called.');
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('onChanges called.', changes);

	}

	ngOnInit() {
		console.log('onInit called.');
	}

	ngDoCheck() {
		console.log('doCheck called');
	}

	ngAfterContentInit() {
		console.log('afterContentInit called.');
	}


	ngAfterContentChecked() {
		console.log('afterContentChecked called.');
	}

	ngAfterViewInit() {
		console.log('AfterViewInit called.');
	}

	ngAfterViewChecked() {
		console.log('AfterViewChecked called.');
	}

	ngOnDestroy() {
		console.log('OnDestroy called.');
	}

}
