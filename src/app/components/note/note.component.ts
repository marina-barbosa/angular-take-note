import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  providers: [NoteService],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note: any;
}
