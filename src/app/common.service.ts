import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

	HOST = "http://localhost:3000/";
	constructor(private _http:HttpClient) { }
  
  
  
  createUser(user){
	  return this._http.post(this.HOST+'users', user);
  }
  getAllUser(){
	  return this._http.get(this.HOST+'users');
  }
  
  updateUser(user){
	  console.log('main update', user);
	  return this._http.put(this.HOST+'users/'+user.id, user);
  }
  
  deleteUser(user){
	  return this._http.delete(this.HOST+'users/'+user.id, user);
  }
  
}
