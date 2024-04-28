import { Component, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-show',
  standalone: true,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
  imports: [CommonModule],
  providers: [NoteService]
})
export class ShowComponent {

  selectedNote$: any;

  constructor(public noteService: NoteService) { }

  // ngOnInit(): void {
  //   this.noteService.selectedNote$.subscribe(note => {
  //     this.selectedNote = note;
  //   });
  //   console.log('oninit2: ')
  //   console.log(this.selectedNote)
  //}

  ngOnInit() {
    this.noteService.selectedNote$.subscribe(note => this.receiveNote(note));
  }

  receiveNote(note: any) {
    console.log('Nota recebida:', note);
    // Use a nota recebida aqui, por exemplo, atualizando a interface do usuário
  }
}
