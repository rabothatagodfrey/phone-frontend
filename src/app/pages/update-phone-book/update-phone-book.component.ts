import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { ToastrService } from 'ngx-toastr'; //toaster
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-phone-book',
  templateUrl: './update-phone-book.component.html',
  styleUrls: ['./update-phone-book.component.scss']
})
export class UpdatePhoneBookComponent implements OnInit {

  id:any;
  selectedPhone:any;

  updateForm = new FormGroup({
		phone: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('')
	})
  constructor(private __phoneBook:PhonebookService,private ngxService: NgxUiLoaderService,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getListToUpdate();
    this.setData();
    
  }
  updatePhoneBook(){
    this.ngxService.start();
    this.id = this.__phoneBook.getId();
    console.log(this.id)
    this.__phoneBook.updatePhoneBook(this.id,this.updateForm.value).subscribe((res:any)=>{
			console.log(res);
      this.ngxService.stop();
      this.toastr.success(res.message);
		});
    
  }
  getListToUpdate(){
    this.selectedPhone = this.__phoneBook.getSelected();
  }

  setData()
  {
    this.updateForm.controls['name'].setValue(this.selectedPhone.name);
    this.updateForm.controls['phone'].setValue(this.selectedPhone.phone);
    this.updateForm.controls['email'].setValue(this.selectedPhone.email);

  }
}
