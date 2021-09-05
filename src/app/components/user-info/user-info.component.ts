import { Component, OnInit } from '@angular/core';
import Requirer  from 'src/assets/js/requirer.js'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  id=localStorage.getItem("currentUser")
  user={
    avatar:"",
    email:"",
    firstName:"",
    lastName:""
  }
  needEdit:boolean=true
  
  constructor() { }
  
  editClick(){
    this.needEdit=!this.needEdit
  }

  onChange(value:string){
  }

  ngOnInit(): void {
    Requirer.GetUser(this.id,(res: any) => {
      console.log(res.data)
      this.user={
        avatar:res.data.avatar,
        email:res.data.email,
        firstName:res.data.first_name,
        lastName:res.data.last_name
      }
    })
  }

}
