import { Component, Input } from '@angular/core';
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

  selectedNote: any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.selectedNote$.subscribe(note => {
      this.selectedNote = note;
    });
    console.log('oninit: ')
    console.log(this.selectedNote)
  }
}
