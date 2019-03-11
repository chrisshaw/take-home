import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { GraderBoardComponent } from './grader-tools/grader-board/grader-board.component';

const routes: Routes = [
  // { path: 'grader-board', component: GraderBoardComponent},
  { path: '', component: GraderBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
