import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultBackgroundColor = 'transparent';
	@Input() defaultColor = 'black';

	// tslint:disable-next-line:no-input-rename
	@Input('appBetterHighlightDirective') highlightBackgroundColor = 'yellow';

	@Input() highlightColor = 'black';
	@HostBinding('style.backgroundColor') backgroundColorVariable = this.defaultBackgroundColor;
	@HostBinding('style.color') colorVariable = this.defaultColor;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit(): void {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
		// this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
	}

	@HostListener('mouseenter') mouseover(eventData: Event): void {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
		// this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
		this.backgroundColorVariable = this.highlightBackgroundColor;
		this.colorVariable = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave(): void {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
		// this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
		this.backgroundColorVariable = this.defaultBackgroundColor;
		this.colorVariable = this.defaultColor;
	}


}
