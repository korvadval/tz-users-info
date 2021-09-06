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
  needEdit:boolean=false
  msg=""

  constructor() { }

  onSubmit(firstName:string,lastName:string,email:string,avatar:string){
    this.needEdit=!this.needEdit
    this.user.firstName=firstName
    this.user.lastName=lastName
    this.user.email=email
    this.user.avatar=avatar
    
    Requirer.EditUser(this.id,this.user, (res:any)=>{
        if(res.status==200){
          this.msg="Данные успенно изменены"
          let buf=document.getElementById("msg") as HTMLElement;
          buf.className="success"
        }else{
          this.msg="Ошибка при обновлении данных:"+res.status
          let buf=document.getElementById("msg") as HTMLElement;
          buf.className="error"
        }
    })
  }

  editClick(){
    this.needEdit=!this.needEdit
    this.msg=""
  }

  ngOnInit(): void {
    Requirer.GetUser(this.id,(res: any) => {
      //console.log(res.data)
      this.user={
        avatar:res.data.avatar,
        email:res.data.email,
        firstName:res.data.first_name,
        lastName:res.data.last_name
      }
    })
  }

}
