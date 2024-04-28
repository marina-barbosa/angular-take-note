import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = 'https://takenotemxm.azurewebsites.net/v1/note/';

  _selectedNoteSource = new BehaviorSubject<any>(null);
  public selectedNote$ = this._selectedNoteSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError((error: any) => {
        console.error('Algo deu errado:', error);
        return throwError(() => new Error('Algo deu errado.'));
      })
    );
  }

  selectNote(note: any): void {
    this._selectedNoteSource.next(note);
    console.log('SERVICE:')
    console.log(this.selectedNote$.subscribe(note => note))
  }

  createNote(note: any): Observable<any> {
    return this.http.post(this.url, note).pipe(
      catchError(error => {
        console.error('Erro ao criar nota:', error);
        return throwError(() => new Error('Erro ao criar nota'));
      })
    );
  }

  updateNote(note: any): Observable<any> {
    return this.http.put(`${this.url}${note.id}`, note).pipe(
      catchError(error => {
        console.error('Erro ao atualizar nota:', error);
        return throwError(() => new Error('Erro ao atualizar nota'));
      })
    );
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.url}${id}`).pipe(
      catchError(error => {
        console.error('Erro ao deletar nota:', error);
        return throwError(() => new Error('Erro ao deletar nota'));
      })
    );
  }


}
