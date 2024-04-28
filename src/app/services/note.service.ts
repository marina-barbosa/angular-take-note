import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = 'https://takenotemxm.azurewebsites.net/v1/note/';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Algo deu errado.'));
      })
    );
  }
}
