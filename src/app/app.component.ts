import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// for assignment number 4

	oddNumbers:number[] = [];
	evenNumbers:number[] = [];

	onIntervalFired(event) {
		console.log(event);
		if (event % 2 === 0) this.evenNumbers.push(event);
		else this.oddNumbers.push(event);
	}
}
