import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
   students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {

     this.studentService.getStudents()
      .subscribe(data => {
        this.students = data as any[];
        console.log(this.students);
      });

  }

}
