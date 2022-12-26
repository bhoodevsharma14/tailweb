import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent {

  constructor(private service:SharedService){ }
  StudentList:any=[];
  ModalTitle:string;
  ActivateAddEditScoreComp:boolean;
  student:any;

  ngOnInit(): void{
    this.refreshStudent();
  }

  refreshStudent(){
    this.ActivateAddEditScoreComp=false
    this.service.getStudentList().subscribe(data=>{
      this.StudentList = data;
    });
  }

  addClick(){
    this.student = {
      id:0,
      student_name:"",
    }
    this.ModalTitle="Add Score";
    this.ActivateAddEditScoreComp=true;
  }

  closeClick(){
    this.ActivateAddEditScoreComp=false;
    this.refreshStudent();
  }


  editClick(item){
    this.student = item;
    this.ModalTitle = 'Edit Score';
    this.ActivateAddEditScoreComp=true;
  }

  deleteClick(item){
    if(confirm('Are You Sure ??')){
      this.service.deleteStudent(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshStudent()
      })
    }

  }
}
