import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-score',
  templateUrl: './add-edit-score.component.html',
  styleUrls: ['./add-edit-score.component.css']
})
export class AddEditScoreComponent implements OnInit{
  
  constructor(private service:SharedService){}

  @Input() score:any;
  id:number;
  student:number;
  subject:number;
  student_name:string;
  subject_name:string;
  marks:number;

  ngOnInit(): void {
    this.id = this.score.id;
    this.student = this.score.student;
    this.subject = this.score.subject;
    this.student_name = this.score.student_name;
    this.subject_name = this.score.subject_name;
    this.marks = this.score.marks;
  }

  addStudentSubjectMarks(){
    var data = {id:this.id,
                student:this.student,
                subject:this.subject,
                student_name:this.student_name,
                subject_name:this.subject_name,
                marks:this.marks
              }
    this.service.addScore(data).subscribe(res=>{
      console.log(res)
      alert(res)
    })
  }

  editStudentSubjectMarks(){
    var data = {id:this.id,
                student:this.student,
                subject:this.subject,
                student_name:this.student_name,
                subject_name:this.subject_name,
                marks:this.marks
              }
    this.service.updateScore(data).subscribe(res=>{alert(res.toString())})
  }

}
