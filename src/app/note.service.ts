import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES} from './mock-notes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {

  private notesUrl = 'api/notes';

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}


  constructor(
  	private http: HttpClient,
  	private messageService: MessageService) { }



  getNotes (): Observable<Note[]> {
  return this.http.get<Note[]>(this.notesUrl)
    .pipe(
    	tap(notes => this.log('fetched notes')),
      catchError(this.handleError('getNotes', []))
    );
}

	
  getNote(id: number): Observable<Note> {
  	 const url = `${this.notesUrl}/${id}`;
  	return this.http.get<Note>(url).pipe(
    tap(_ => this.log(`fetched note id=${id}`)),
    catchError(this.handleError<Note>(`getNote id=${id}`))
  );
}

searchNotes(term: string): Observable<Note[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Note[]>(`api/notes/?name=${term}`).pipe(
      tap(_ => this.log(`found notes matching "${term}"`)),
      catchError(this.handleError<Note[]>('searchNotes', []))
    );
  }

/** POST: add a new hero to the server */
addNote (note: Note): Observable<Note> {
  return this.http.post<Note>(this.notesUrl, note, httpOptions).pipe(
    tap((note: Note) => this.log(`added note w/ id=${note.id}`)),
    catchError(this.handleError<Note>('addNote'))
  );
}


/** DELETE: delete the hero from the server */
deleteNote (note: Note | number): Observable<Note> {
  const id = typeof note === 'number' ? note : note.id;
  const url = `${this.notesUrl}/${id}`;

  return this.http.delete<Note>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted note id=${id}`)),
    catchError(this.handleError<Note>('deleteNote'))
  );
}
 

/** PUT: update the hero on the server */
updateNote (note: Note): Observable<any> {
  return this.http.put(this.notesUrl, note, httpOptions).pipe(
    tap(_ => this.log(`updated note id=${note.id}`)),
    catchError(this.handleError<any>('updateNote'))
  );
}


  private log(message : string)
  {
  	this.messageService.add('NoteService' + message);
  }

}


