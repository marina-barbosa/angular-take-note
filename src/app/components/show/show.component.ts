import { Component, OnInit } from '@angular/core';
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
export class ShowComponent implements OnInit {

  selectedNote: any = null;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.selectedNote = this.noteService.selectedNote$.subscribe(note => {
      this.selectedNote = note
      console.log(this.selectedNote);
    });
  }

}
