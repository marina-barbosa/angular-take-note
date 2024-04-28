import { Component } from '@angular/core';
import { NoteComponent } from "../note/note.component";

@Component({
    selector: 'app-show',
    standalone: true,
    templateUrl: './show.component.html',
    styleUrl: './show.component.css',
    imports: [NoteComponent]
})
export class ShowComponent {

}
