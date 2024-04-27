import { Component } from '@angular/core';
import { NoteMiniComponent } from "../note-mini/note-mini.component";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
    imports: [NoteMiniComponent]
})
export class IndexComponent {

}
