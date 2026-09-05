import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
   students: any[] = [];

  constructor(private studentService: StudentService) {

    this.students = this.studentService.getStudents();

  }
}
