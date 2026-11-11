import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  // Student list
  students = [
    {
      id: 1,
      name: 'Rahul',
      age: 22,
      course: '.NET',
      isActive: true
    },
    {
      id: 2,
      name: 'Amit',
      age: 24,
      course: 'Angular',
      isActive: false
    },
    {
      id: 3,
      name: 'Shubham',
      age: 23,
      course: '.NET Full Stack',
      isActive: true
    },
    {
      id: 4,
      name: 'Priya',
      age: 22,
      course: 'React',
      isActive: true
    }
  ];

  showStudents = true;

  selectedCourse = 'All';


  // Toggle student list
  toggleStudents(): void {

    this.showStudents = !this.showStudents;

  }


  // Toggle student status
  toggleStatus(id: number): void {

    const student = this.students.find(s => s.id === id);

    if (student) {

      student.isActive = !student.isActive;

    }

  }


  // Delete student
  deleteStudent(id: number): void {

    this.students = this.students.filter(
      student => student.id !== id
    );

  }


  // Count active students
  getActiveStudentCount(): number {

    return this.students.filter(
      student => student.isActive
    ).length;

  }

}