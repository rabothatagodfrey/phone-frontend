import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-phonebook-entries',
  templateUrl: './all-phonebook-entries.component.html',
  styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

  phoneBookList:any = [];

  constructor(private __phonebook: PhonebookService,private router:Router) { }

  SearchForm = new FormGroup({
		option: new FormControl(''),
	})
  ngOnInit(): void {

    this.__phonebook.getPhoneBook().subscribe((res:any)=>{
      this.phoneBookList = res;
    })
    
  }
  submit(){
    console.log(this.SearchForm.value.option)
    this.__phonebook.searchPhoneBook(this.SearchForm.value.option).subscribe((res:any)=>{
      this.phoneBookList = res;
      
      return this.phoneBookList;
    },(error)=> {

    })
   
    
  }
  delete(id:string){
    this.__phonebook.deletePhone(id).subscribe((res:any)=>{
      console.log(res);
    })
  }
  edit(id:any){
    this.__phonebook.setPhoneBook(id);
    this.router.navigate(['/update']);
  }

}
