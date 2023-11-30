import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkexperienceComponent } from './cv/workexperience/workexperience.component';
import { CoursesComponent } from './cv/courses/courses.component';
import { AcademictrainingComponent } from './cv/academictraining/academictraining.component';
import { ProjectsComponent } from './cv/projects/projects.component';
import { ProgramminglanguagesComponent } from './cv/programminglanguages/programminglanguages.component';
import { ProfileComponent } from './cv/profile/profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './cv/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkexperienceComponent,
    CoursesComponent,
    AcademictrainingComponent,
    ProjectsComponent,
    ProgramminglanguagesComponent,
    FooterComponent,
    ProfileComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
