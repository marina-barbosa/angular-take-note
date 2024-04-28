import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [NoteService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private noteService: NoteService) { }

  createNote(): void {
    const newNote = { title: 'titulo', content: 'texte here' };
    this.noteService.createNote(newNote).subscribe({
      next: (createdNote) => {
        console.log('Nota criada com sucesso:', createdNote);
        window.location.reload()
        this.noteService.selectNote(createdNote);
      },
      error: (error) => {
        console.error('Erro ao criar nota:', error);
      }
    });

  }
}
