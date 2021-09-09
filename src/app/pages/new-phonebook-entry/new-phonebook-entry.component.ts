import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { ToastrService } from 'ngx-toastr'; //toaster

@Component({
	selector: 'app-new-phonebook-entry',
	templateUrl: './new-phonebook-entry.component.html',
	styleUrls: ['./new-phonebook-entry.component.scss']
})
export class NewPhonebookEntryComponent implements OnInit {

	constructor(private __phonebook: PhonebookService,private ngxService: NgxUiLoaderService,private toastr: ToastrService) { }

	phonebookForm = new FormGroup({
		name: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
	})

	ngOnInit(): void {}

	submitPhoneBootEntry(){
		this.__phonebook.addNewPhonebook(this.phonebookForm.value);
	}
}
