import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonService} from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-main';
	allUser:any;
	userObj= {
		firstname: "",
		lastname: "",
		email: "",
		mobileNumber: "",
		id:''
	};
	isEdit = false;
  
	constructor(private commonService:CommonService){
	  
	}
  
	ngOnInit(){
		this.getLatestUser();
	}
  
	getLatestUser() {
		this.commonService.getAllUser().subscribe((response) => {
			this.allUser = response;
		});
	}
	
	onSubmit(userForm: NgForm) {
		
		if(!this.userObj.id) {
			this.commonService.createUser(this.userObj).subscribe((response) => {
				this.getLatestUser();
				//userForm.reset();
				userForm.resetForm();
			});
		} else {
			this.commonService.updateUser(this.userObj).subscribe(() => {
				this.getLatestUser();
				this.isEdit = !this.isEdit;
				userForm.resetForm();
			});
		}
		
	}
  
	addUser(user) {
		this.commonService.createUser(user).subscribe((response) => {
			this.getLatestUser();
		}); 
	}
  
	editUser(user) {
		this.userObj = user;
		this.isEdit = true;
	}
  
	deleteUser(user) {
		this.commonService.deleteUser(user).subscribe(() => {
			this.getLatestUser();
		}); 
	}
}
