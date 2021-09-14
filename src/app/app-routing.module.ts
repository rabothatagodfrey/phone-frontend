import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPhonebookEntryComponent } from './pages/new-phonebook-entry/new-phonebook-entry.component';
import { AllPhonebookEntriesComponent } from './pages/all-phonebook-entries/all-phonebook-entries.component';
import { UpdatePhoneBookComponent } from './pages/update-phone-book/update-phone-book.component';
import { PhoneBookNavbarComponent } from './pages/phone-book-navbar/phone-book-navbar.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/' },

	{ path: 'phonebook-entry', component: NewPhonebookEntryComponent },
	{ path: '', component: AllPhonebookEntriesComponent },
	{ path: 'update', component: UpdatePhoneBookComponent },
	{ path: 'nav', component:  PhoneBookNavbarComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }