import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

const candidatesMock: Candidate[] = [
  {
    id: 1,
    name: 'Carol Martínez',
    'interview-date': new Date(),
    skills: {
      Angular: true,
      JavaScript: false,
      Microservicios: false,
    },
  },
  {
    id: 2,
    name: 'Juan Bautista',
    'interview-date': new Date(),
    skills: {
      Angular: false,
      JavaScript: true,
      Microservicios: false,
    },
  },
  {
    id: 3,
    name: 'Gerardo Reyes',
    'interview-date': new Date(),
    skills: {
      Angular: false,
      JavaScript: false,
      Microservicios: true,
    },
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
