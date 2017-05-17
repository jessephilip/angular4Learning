import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Custom directive which operates oppositely from ngIf. HTML code will only be displayed if input passed to it evaluates to false.
 *
 * @export
 * @class UnlessDirective
 */

@Directive({

	// NOTE: if passing input to the directive, the selector and the input variable names MUST match
	// EXAMPLE: <div *appUnless="false"></div> ... appUnless selector must match @Input() appUnless
	selector: '[appUnless]'
})
export class UnlessDirective {
	@Input() set appUnless(value: boolean) {
		if (!value) {
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}

	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
