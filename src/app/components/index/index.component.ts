import { Component } from '@angular/core';
import { NoteMiniComponent } from "../note-mini/note-mini.component";
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  imports: [NoteMiniComponent, CommonModule],
  providers: [NoteService]
})
export class IndexComponent {
  notes: any[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe(data => {
      this.notes = data;
    });
  }

}
