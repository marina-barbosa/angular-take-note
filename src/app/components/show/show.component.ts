import { Component } from '@angular/core';
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
      console.log('NoteSelected updated:', this.noteSelected);
      console.log(noteService.selectedNote$)
    });

    var teste = noteService.selectedNote$.subscribe(note => {
      this.noteSelected = note;
      console.log('nsteste$', noteService.selectedNote$)
      console.log('teste', teste)
    });

    console.log('TESTEfina', teste)

  }

}
