import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-update-phone-book',
  templateUrl: './update-phone-book.component.html',
  styleUrls: ['./update-phone-book.component.scss']
})
export class UpdatePhoneBookComponent implements OnInit {

  id:any;

  updateForm = new FormGroup({
		phone: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('')
	})
  constructor(private __phoneBook:PhonebookService) { }

  ngOnInit(): void {

    this.id = this.__phoneBook.getPhoneBook();
  }
  updatePhoneBook(){
    this.__phoneBook.updatePhoneBook(this.id,this.updateForm.value).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
