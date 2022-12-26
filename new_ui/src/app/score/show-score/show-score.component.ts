import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit {

  constructor(private service:SharedService){ }
  ScoreList:any=[];
  ModalTitle:string;
  ActivateAddEditScoreComp:boolean;
  score:any;

  ngOnInit(): void{
    this.refreshScoreList();
  }

  refreshScoreList(){
    this.ActivateAddEditScoreComp=false
    this.service.getScoreList().subscribe(data=>{
      this.ScoreList = data;
    });
  }
  
  addClick(){
    this.score = {
      id:0,
      student_name:"",
      subject_score:"",
      marks:""
    }
    this.ModalTitle="Add Score";
    this.ActivateAddEditScoreComp=true;
  }

  closeClick(){
    this.ActivateAddEditScoreComp=false;
    this.refreshScoreList();
  }

  editClick(item){
    this.score = item;
    this.ModalTitle = 'Edit Score';
    this.ActivateAddEditScoreComp=true;
  }
  
  deleteClick(item){
    if(confirm('Are You Sure ??')){
      this.service.deleteScore(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshScoreList()
      })
    }

  }


}
