import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://127.0.0.1:8000';
  token:object;
  headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');

  constructor(private http:HttpClient) { }

  getToken(username:string,password:string){
    var data = JSON.stringify({"username":username,"password":password})
    var response = this.http.post(this.APIUrl+'/api/token/',data,{headers:this.headers});
    this.token = response;
    sessionStorage.setItem('Authorization', "Bearer "+response['access']);
    this.headers.set('Authorization','Bearer '+sessionStorage.getItem('access'))
    return response
  }
  
  getScoreList():Observable<any[]>{
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.get<any[]>(this.APIUrl+'/app/score/',{headers:header});
  }

  addScore(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.post(this.APIUrl+'/app/score/',val,{headers:header})
  }
  updateScore(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.put(this.APIUrl+'/app/score/'+val.id+'/',val,{headers:header})
  }
  
  deleteScore(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.delete(this.APIUrl+'/app/score/'+val+'/',{headers:header})
  }

  getStudentList():Observable<any[]>{
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.get<any[]>(this.APIUrl+'/app/student/',{headers:header});
  }

  addStudent(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.post(this.APIUrl+'/app/student/',val,{headers:header})
  }
  updateStudent(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.put(this.APIUrl+'/app/student/',val,{headers:header})
  }
  
  deleteStudent(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.delete(this.APIUrl+'/app/student/'+val+'/',{headers:header})
  }

  getSubjectList():Observable<any[]>{
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.get<any[]>(this.APIUrl+'/app/subject/',{headers:header});
  }

  addSubject(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.post(this.APIUrl+'/app/subject/',val,{headers:header})
  }
  updateSubject(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.put(this.APIUrl+'/app/subject/',val,{headers:header})
  }
  
  deleteSubject(val:any){
    var header = new HttpHeaders().set("Authorization",sessionStorage.getItem('Authorization'));
    return this.http.delete(this.APIUrl+'/app/subject/'+val+'/',{headers:header})
  }

}
