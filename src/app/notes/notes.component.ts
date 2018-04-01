import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import {NOTES} from '../mock-notes'
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

     notes: Note[];

   selectedNote: Note;


   constructor(private noteService: NoteService) { }

  getNotes(): void {
  this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
}

  ngOnInit() {
     this.getNotes();
  }


  }




