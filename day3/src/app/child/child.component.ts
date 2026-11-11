import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() studentName = '';

  @Input() studentAge = 0;

    @Output() clicked = new EventEmitter<void>();
 sendMessage() {
    this.clicked.emit();
 }
}
