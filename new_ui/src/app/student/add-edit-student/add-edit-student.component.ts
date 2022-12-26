import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit{

  constructor(private service:SharedService){}

  @Input() student:any;
  id:number;
  student_name:string;

  ngOnInit(): void {
    this.id = this.student.id;
    this.student_name = this.student.student_name;
  }

  addStudent(){
    var data = {id:this.id,
                student_name:this.student_name,
              }
    this.service.addStudent(data).subscribe(res=>{
      console.log(res)
      alert(res)
    })
  }

  editStudent(){
    var data = {id:this.id,
                student_name:this.student_name,
              }
    this.service.updateStudent(data).subscribe(res=>{alert(res.toString())})
  }

}
