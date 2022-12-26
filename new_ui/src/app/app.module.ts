import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { ShowScoreComponent } from './score/show-score/show-score.component';
import { AddEditScoreComponent } from './score/add-edit-score/add-edit-score.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { ShowSubjectComponent } from './subject/show-subject/show-subject.component';
import { AddEditSubjectComponent } from './subject/add-edit-subject/add-edit-subject.component';
import { SharedService } from './shared.service'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScoreComponent,
    ShowScoreComponent,
    AddEditScoreComponent,
    StudentComponent,
    SubjectComponent,
    ShowStudentComponent,
    AddEditStudentComponent,
    ShowSubjectComponent,
    AddEditSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
