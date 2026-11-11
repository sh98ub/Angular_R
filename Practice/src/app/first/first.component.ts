import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  students = [
  { id: 1, name: 'Shubham', age: 22 },
  { id: 2, name: 'Rahul', age: 21 },
  { id: 3, name: 'Amit', age: 23 }
];

}
