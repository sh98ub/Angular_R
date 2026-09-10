import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

    student = {
    name: '',
    email: '',
    age: null
  };

  submitForm(form: NgForm) {
    console.log(form.value);
    console.log(this.student);
  }

}
