import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { Student } from '../../user/student';
import { Grader } from '../../user/grader';

@Component({
  selector: 'grader-board',
  templateUrl: './grader-board.component.html',
  styleUrls: ['./grader-board.component.scss'],
  animations: [
    // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('1000ms ease-in',
          // 'To' styles
          // 1 - Comment this to remove the item's grow...
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ]),
    ]),

    trigger('selected', [
      state('selected',
        style({
          backgroundColor: 'whitesmoke',
          // transform: 'scale(1.2)',
        })
      ),
      transition('selected <=> *', [
        animate('300ms ease-in')
      ]),
    ])
  ]
})

export class GraderBoardComponent implements OnInit  {
  courses: ICourse[];
  show = true;

  constructor(private router: Router) { }

  ngOnInit() {

    this.courses = [
      {courseName: "social Studies", totalCredit: 3, creditGain: 0}, 
      {courseName: "math", totalCredit: 3, creditGain: 0}, 
      {courseName: "science", totalCredit: 3, creditGain: 0}, 
      {courseName: "english", totalCredit: 4, creditGain: 0}, 
      {courseName: "pe", totalCredit: 1.5, creditGain: 0}, 
      {courseName: "health", totalCredit: 0.5, creditGain: 0}, 
      {courseName: "heaelectiveslth", totalCredit: 7, creditGain: 0}, 
    ];
  }

  addCredit(i: number) {
    this.courses[i].creditGain += 0.25;
    this.courses[this.courses.length-1].creditGain += 0.25;
  }

}

interface ICourse {
  id ?: number;
  courseName: string;
  totalCredit: number; 
  creditGain: number;
}