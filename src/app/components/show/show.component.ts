import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show',
  standalone: true,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
  imports: [CommonModule],
  providers: [NoteService]
})
export class ShowComponent implements OnDestroy {
  subscription: Subscription | undefined;

  constructor(private noteService: NoteService) {
    this.subscription = this.noteService.selectedNote$.subscribe(note => {
      if (note) {
        console.log('Note updated:', note);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
