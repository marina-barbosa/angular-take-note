import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [NoteService],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  notes: any;
  selectedNote: any;

  isNoteChanged = false;
  originalNote: any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
    this.noteService.selectedNote$.subscribe(nota => {
      this.selectedNote = nota;
    });
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe(data => {
      this.notes = data;
    });
  }

  onNoteClick(note: any): void {
    this.noteService.selectNote(note);
    console.log(note)

    this.originalNote = { ...note };
    this.selectedNote = note;
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        console.log('Nota deletada com sucesso');
        this.loadNotes();
      },
      error: (error) => {
        console.error('Erro ao deletar nota:', error);
      }
    });
  }

  onNoteChange(): void {
    this.isNoteChanged = JSON.stringify(this.selectedNote) !== JSON.stringify(this.originalNote);

  }

  saveNote(): void {
    this.noteService.updateNote(this.selectedNote).subscribe({
      next: () => {
        console.log('Nota atualizada com sucesso');
        this.isNoteChanged = false;
        this.loadNotes();
      },
      error: (error) => {
        console.error('Erro ao atualizar nota:', error);
      }
    });
  }
}
