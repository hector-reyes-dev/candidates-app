import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  @Input() candidate: Candidate = {
    id: 0,
    name: '',
    'interview-date': '',
    skills: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
