import { Component } from '@angular/core';
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
export class ShowComponent {

  private subscription: Subscription = new Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.subscription = this.noteService.selectedNote$.subscribe(note => {
      console.log(note);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
