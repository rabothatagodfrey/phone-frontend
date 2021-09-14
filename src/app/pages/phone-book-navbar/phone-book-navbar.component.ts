import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-book-navbar',
  templateUrl: './phone-book-navbar.component.html',
  styleUrls: ['./phone-book-navbar.component.scss']
})
export class PhoneBookNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['']);
  }
  add(){
    this.router.navigate(['phonebook-entry']);
  }

}
