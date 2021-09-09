import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { ToastrService } from 'ngx-toastr'; //toaster


@Component({
  selector: 'app-all-phonebook-entries',
  templateUrl: './all-phonebook-entries.component.html',
  styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

  phoneBookList:any = [];
  
  count:number;

  constructor(private __phonebook: PhonebookService,private router:Router,private ngxService: NgxUiLoaderService,private toastr: ToastrService) { }

  SearchForm = new FormGroup({
		option: new FormControl(''),
	})
  ngOnInit(): void {

    this.ngxService.start();
    this.__phonebook.getPhoneBook().subscribe((res:any)=>{
      this.phoneBookList = res;
      this.ngxService.stop();
    })
    
  }
  submit(){
    this.ngxService.start();
    console.log(this.SearchForm.value.option)
    this.__phonebook.searchPhoneBook(this.SearchForm.value.option).subscribe((res:any)=>{
      this.phoneBookList = res;
      this.ngxService.stop();
      this.toastr.success('Hello world!', 'Toastr fun!');
      return this.phoneBookList;
    },(error)=> {
      this.ngxService.stop();
    })
   
    
  }
  delete(id:string){
    this.ngxService.start();
    this.__phonebook.deletePhone(id).subscribe((res:any)=>{
      console.log(res);
        this.__phonebook.getPhoneBook().subscribe((res:any)=>{
          this.phoneBookList = res;
          this.toastr.success(res.message);
          this.ngxService.stop();
        });
    })
  }
  edit(id:any){
    this.__phonebook.setPhoneBook(id);
    this.router.navigate(['/update']);
  }
  add(){
    this.router.navigate(['/phonebook-entry']);
  }
  

}
