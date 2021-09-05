import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin:boolean=false
  value:string=""
  paramChild={
    header:"Вход",
    button:"Войти",
    req:"login",
    typeOfInput:"password",
    err:""
  }
  exitClick(){
    localStorage.removeItem("token")
    window.location.reload();
  }
  loginClick(){
    this.paramChild.header="Вход"
    this.paramChild.button="Войти"
    this.paramChild.req="login"
    this.paramChild.typeOfInput="password"
    this.paramChild.err=""
  }
  registerClick(){
    this.paramChild.header="Регистрация"
    this.paramChild.button="Готово"
    this.paramChild.req="register"
    this.paramChild.typeOfInput="text"
    this.paramChild.err=""
  }
  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLogin=true;
    }
  }
}
