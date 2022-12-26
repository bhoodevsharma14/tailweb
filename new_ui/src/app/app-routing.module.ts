import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'score',component:ScoreComponent},
  {path:'student',component:StudentComponent},
  {path:'subject',component:SubjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
