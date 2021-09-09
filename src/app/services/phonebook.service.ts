import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {
	//to set phone id 
	data:any;
	constructor(private __http: HttpClient) { }

	url = "http://localhost:3000/api/phonebook";

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			console.log(res);
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
	
	updatePhoneBook(id:any,payload:any){
		console.log(id);
		const updateUrl = `${this.url}/${id}`;
		return this.__http.patch(`${updateUrl}`,payload);
	}
}
