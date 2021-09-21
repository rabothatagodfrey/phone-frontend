
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
import { PhoneBookNavbarComponent } from './pages/phone-book-navbar/phone-book-navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		NewPhonebookEntryComponent,
		AllPhonebookEntriesComponent,
  UpdatePhoneBookComponent,
  PhoneBookNavbarComponent,
  FooterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MDBBootstrapModule.forRoot(),
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		// Import NgxUiLoaderModule
		NgxUiLoaderModule.forRoot({
			"bgsColor": "#fd7e14",
			"bgsOpacity": 0.5,
			"bgsPosition": "bottom-right",
			"bgsSize": 60,
			"bgsType": "square-jelly-box",
			"blur": 5,
			"delay": 0,
			"fastFadeOut": true,
			"fgsColor": "#fd7e14",
			"fgsPosition": "center-center",
			"fgsSize": 60,
			"fgsType": "square-jelly-box",
			"gap": 24,
			"logoPosition": "center-center",
			"logoSize": 120,
			"logoUrl": "",
			"masterLoaderId": "master",
			"overlayBorderRadius": "0",
			"overlayColor": "rgba(40, 40, 40, 0.8)",
			"pbColor": "red",
			"pbDirection": "ltr",
			"pbThickness": 3,
			"hasProgressBar": false,
			"text": "Loading ...",
			"textColor": "#fd7e14",
			"textPosition": "center-center",
			"maxTime": -1,
			"minTime": 300
		}),
		BrowserAnimationsModule, // required animations module
		ToastrModule.forRoot(),
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
