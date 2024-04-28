import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = 'https://takenotemxm.azurewebsites.net/v1/note/';

  _selectedNoteSource = new BehaviorSubject<any>(null);
  selectedNote$ = this._selectedNoteSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Algo deu errado.'));
      })
    );
  }

  selectNote(note: any): void {
    this._selectedNoteSource.next(note);
  }

}
