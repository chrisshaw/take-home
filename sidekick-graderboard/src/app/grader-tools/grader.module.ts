import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraderService } from './grader.service';
import { GraderBoardComponent } from './grader-board/grader-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GraderBoardComponent
  ],
  exports: [],
  entryComponents: [],
  providers: [ GraderService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GraderModule { }
