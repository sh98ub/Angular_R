import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   students = [
    { id: 1, name: 'Shubham', age: 25 },
    { id: 2, name: 'Rahul', age: 24 },
    { id: 3, name: 'Amit', age: 26 }
  ];
  getStudents() {
    return this.students;
  }
  addStudent(name: string,age: number){

  const  newStudent={
    id:this.students.length+1,
    name:name,
    age:age

    };

    this.students.push(newStudent);


  }
}
