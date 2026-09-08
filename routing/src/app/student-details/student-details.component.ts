import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet ,RouterLink} from '@angular/router';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  studentId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id');
  }

}
