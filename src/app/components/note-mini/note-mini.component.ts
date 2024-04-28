import { Component, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-mini',
  standalone: true,
  imports: [CommonModule],
  providers: [NoteService],
  templateUrl: './note-mini.component.html',
  styleUrl: './note-mini.component.css'
})
export class NoteMiniComponent {
  @Input() note: any;
  constructor(private noteService: NoteService) { }

  onNoteClick(): void {
    this.noteService.selectNote(this.note);
    console.log(this.note);
  }
}
