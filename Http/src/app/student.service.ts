import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>(this.apiUrl);
  }
}