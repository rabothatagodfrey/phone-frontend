import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { ToastrService } from 'ngx-toastr'; //toaster

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {
	//to set phone id 
	data:any;
	selectedPhone:any;
	constructor(private __http: HttpClient,private ngxService: NgxUiLoaderService,private toastr: ToastrService) { }

	url = "https://godfrey-phonebook-api.herokuapp.com/api/phonebook";

	addNewPhonebook(phonebook: any){
		this.ngxService.start();
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			this.ngxService.stop();
			console.log(res);
			this.toastr.success("Success  ","added new number" )
		}, (err: any) => {
			console.warn (err);
		});
	}
	searchPhoneBook(option:string){

		return this.__http.get(`${this.url}/search?s=${option}`);
	}
	getPhoneBook(){
		return this.__http.get(`${this.url}`);
	}
	deletePhone(id:any){

		console.log(id);
		return this.__http.delete(`${this.url}/${id}`);
	}
	setPhoneBook(data:any){
		this.data = data;
		console.log(data);
		
	}
	getId(){
		return this.data;
	}
	setSelectedPhone(selected:any){
		this.selectedPhone = selected;
	}
	getSelected(){
		return this.selectedPhone;
	}
	
	updatePhoneBook(id:any,payload:any){
		console.log(id);
		const updateUrl = `${this.url}/${id}`;
		return this.__http.patch(`${updateUrl}`,payload);
	}
}
