import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
 { path: '', component: HomeComponent },
{ path: 'students', component: StudentsComponent },
{ path: 'students/:id', component: StudentDetailsComponent,
  children:[
    {
      path:'profile', component: ProfileComponent, canActivate:[authGuard]
    },

    {
      path:'course', component:CourseComponent,canActivate:[authGuard]
    }
  ]
 },
{path: 'login', component:LoginComponent},
];
