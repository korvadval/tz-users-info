import { Component, OnInit } from '@angular/core';
import Requirer  from 'src/assets/js/requirer.js'

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {
  users:any=[]
  resources:any=[]
  constructor() { }
  ngOnInit(): void {
    Requirer.GetListOfUsers(1,(res: any) => {
      let totalPages=res.total_pages
      for(let page=1; page<=totalPages; page++)
      {
        Requirer.GetListOfUsers(page,(res: any) => {
          res.data.forEach((el: { id: any; first_name: string; last_name: string; avatar: any; }) => {
            let user={
              id:el.id,
              name: el.first_name+" "+el.last_name,
              avatar: el.avatar
            }
            this.users.push(user);
          });
        })
      }
    })
    Requirer.GetResources(1,(res: any) => {
      let totalPages=res.total_pages
      for(let page=1; page<=totalPages; page++)
      {
        Requirer.GetResources(page,(res: any) => {
          res.data.forEach((el: { id: any; name: string; pantone_value: string; year: any; }) => {
            console.log(el)
            let res={
              id:el.id,
              name: el.name,
              pantone_value: el.pantone_value,
              year:el.year
            }
            this.resources.push(res);
          });
        })
      }
    })
  }
  showUserInfo(id:string){
    localStorage.setItem("currentUser",id)
  }
  delete(id:number){
    Requirer.DeleteUser(id,(res:any)=>{
      if(res.status==204){
        this.users.splice(id-1,1)
        for(let i=id-1;i<this.users.length;i++){
          this.users[i].id=this.users[i].id-1
        }
      }
    })
  }

  onEnter(id:any){
    document.getElementsByTagName('button')[id-1].className="itemUsersHover"
    let buf=document.getElementById("delete"+id) as HTMLElement;
    buf.className="itemUsersButtonHover delete"
  }
  onLeave(id:any){
    document.getElementsByTagName('button')[id-1].className="itemUsers"
    let buf=document.getElementById("delete"+id) as HTMLElement;
    buf.className="itemUsersButton delete"
  }
}
