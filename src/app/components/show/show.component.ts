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

  selectedNote: any = {
    title: 'Title',
    content: 'text here'
  };

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    console.log('oninit1: ')
    console.log(this.selectedNote)
    this.noteService.selectedNote$.subscribe(note => {
      this.selectedNote = note;
    });
    console.log('oninit2: ')
    console.log(this.selectedNote)
  }
}
