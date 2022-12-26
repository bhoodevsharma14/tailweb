import { SharedService } from '../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username:string;
  public password:string;

  public authorization = sessionStorage.length;
  public token:any;

  constructor(private service:SharedService) { }

  login(){
    console.log('logincalled',this.password,this.username)
    this.service.getToken(this.username,this.password).subscribe(res=>{
      sessionStorage.setItem('access',res['access'])
      sessionStorage.setItem('refresh',res['refresh'])
      sessionStorage.setItem('Authorization','Bearer '+res['access'])
    })

  }
}
