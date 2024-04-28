import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
  imports: [CommonModule],
  providers: [NoteService]
})
export class ShowComponent {
  noteSelected: any = null

  constructor(noteService: NoteService) {

    noteService.selectedNote$.subscribe(note => {
      this.noteSelected = note;
      console.log('Note updated:', note);
    });

  }

}
