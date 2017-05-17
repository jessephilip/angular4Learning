import {
	AfterContentInit,
	AfterContentChecked,
	AfterViewChecked,
	AfterViewInit,
	Component,
	ContentChild,
	DoCheck,
	ElementRef,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css'],

	// NOTE: Three options for view encapsulation: none, emulated, native
	encapsulation: ViewEncapsulation.Emulated
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

	// tslint:disable-next-line:no-input-rename
	@Input('srvElement') element: {type: string, name: string, content: string};
	@Input() name: string;
	@ViewChild('header') header:ElementRef;
	@ContentChild('paragraph') paragraph:ElementRef;

	constructor() {
		// console.log('constructor called.');
	}

	ngOnChanges(changes: SimpleChanges) {
		// console.log('onChanges called.', changes);

	}

	ngOnInit() {
		// console.log('onInit called.');
	}

	ngDoCheck() {
		// console.log('doCheck called');
	}

	ngAfterContentInit() {
		// console.log('afterContentInit called.');
		// console.log('Passed Local Reference: paragraph: ', this.paragraph.nativeElement.textContent);

	}


	ngAfterContentChecked() {
		// console.log('afterContentChecked called.');
	}

	ngAfterViewInit() {
		// console.log('AfterViewInit called.');
		// console.log('Local Reference: header: ', this.header.nativeElement.textContent);
	}

	ngAfterViewChecked() {
		// console.log('AfterViewChecked called.');
	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngOnDestroy() {
		// console.log('OnDestroy called.');
	}

}
