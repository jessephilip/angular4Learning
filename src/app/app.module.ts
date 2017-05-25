import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';

// services module
import { ServicesComponent } from './services_module/services.component';
import { AccountComponent } from './services_module/account/account.component';
import { NewAccountComponent } from './services_module/new-account/new-account.component';
import { ServicesAssignmentComponent } from './services-assignment/services-assignment.component';
import { ActiveUsersComponent } from './services-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services-assignment/inactive-users/inactive-users.component';
import { CounterService } from './services-assignment/services/counter.service';

// directives
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		WarningAlertComponent,
		SuccessAlertComponent,
		Assignment2Component,
		Assignment3Component,
		DataBindingComponent,
		CockpitComponent,
		ServerElementComponent,
		GameControlComponent,
		OddComponent,
		EvenComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective,
		ServicesComponent,
		AccountComponent,
		NewAccountComponent,
		ServicesAssignmentComponent,
		ActiveUsersComponent,
		InactiveUsersComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [CounterService],
	bootstrap: [AppComponent]
})
export class AppModule { }
