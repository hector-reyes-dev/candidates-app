import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

const candidatesMock: Candidate[] = [
  {
    id: 1,
    name: 'Carol Martínez',
    'interview-date': '01/11/21',
    skills: ['angular', 'ui'],
  },
  {
    id: 2,
    name: 'Juan Bautista',
    'interview-date': '08/12/22',
    skills: ['react', 'express'],
  },
  {
    id: 3,
    name: 'Gerardo Reyes',
    'interview-date': '24/04/23',
    skills: ['marketing', 'fullstack'],
  },
];

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  @Input() candidates = candidatesMock;

  constructor() {}

  ngOnInit(): void {}
}
