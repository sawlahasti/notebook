import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent }      from './notes/notes.component';
import { ArticlesComponent }   from './articles/articles.component';
import { NoteDetailComponent }  from './note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  //{ path: 'articles', component: ArticlesComponent },
  { path: 'notes', component: NotesComponent }, 
  { path: 'detail/:id', component: NoteDetailComponent },
 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}