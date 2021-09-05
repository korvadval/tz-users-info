import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Requirer  from 'src/assets/js/requirer.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() param: any;
  @ViewChild('name') nameInput!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(login:string, password:string){
    if(this.param.req=="login"){
      Requirer.CheckLogin (login, password, (res: any) => {
        if(res!="Пользователь не найден" && res!="Подключение не установлено"){ 
          localStorage.setItem("token", res.data.token);
          window.location.reload();
        }else{
          this.param.err=res
          let buf=document.getElementById("msg") as HTMLElement;
          buf.className="error"
        }
      })
    }else{
      Requirer.RegisterUser (login,password, (res: any) => {
        if(res!="Проверьте данные" && res!="Подключение не установлено"){
          this.param.err=res
          
          let buf=document.getElementById("msg") as HTMLElement;
          buf.className="success"
        }else{
          this.param.err=res
          let buf=document.getElementById("msg") as HTMLElement;
          buf.className="error"
        }
      })
    }
  }
}
