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

addname(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.noteService.addNote({ name } as Note)
    .subscribe(note => {
      this.notes.push(note);
    });
}

adddes(des: string): void {
  des = des.trim();
  if (!des) { return; }
  this.noteService.addNote({ des } as Note)
    .subscribe(note => {
      this.notes.push(note);
    });
}

delete(note: Note): void {
  this.notes = this.notes.filter(n => n !== note);
  this.noteService.deleteNote(note).subscribe();
}
  ngOnInit() {
     this.getNotes();
  }


  }




