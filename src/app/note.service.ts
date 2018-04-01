import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES} from './mock-notes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class NoteService {

  constructor(private messageService: MessageService) { }

 getNotes(): Observable<Note[]> {
  // Todo: send the message _after_ fetching the heroes
  this.messageService.add('Your note is displayed above');
  return of(NOTES);
}

  getNote(id: number): Observable<Note> {
  this.messageService.add(`NoteService: fetched note id=${id}`);
  return of(NOTES.find(note => note.id === id));

}
}

