
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//ngxloader
import { NgxUiLoaderModule } from "ngx-ui-loader";
// toaster
import { ToastrModule } from 'ngx-toastr';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NewPhonebookEntryComponent } from './pages/new-phonebook-entry/new-phonebook-entry.component';
import { AllPhonebookEntriesComponent } from './pages/all-phonebook-entries/all-phonebook-entries.component';
import { UpdatePhoneBookComponent } from './pages/update-phone-book/update-phone-book.component';

@NgModule({
	declarations: [
		AppComponent,
		NewPhonebookEntryComponent,
		AllPhonebookEntriesComponent,
  UpdatePhoneBookComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MDBBootstrapModule.forRoot(),
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		// Import NgxUiLoaderModule
		NgxUiLoaderModule,
		BrowserAnimationsModule, // required animations module
		ToastrModule.forRoot(),
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
