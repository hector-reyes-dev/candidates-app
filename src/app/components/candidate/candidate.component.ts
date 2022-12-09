import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { Skills } from '../../models/skills.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  candidateSkills: string[] = [];

  @Input() candidate: Candidate = {
    id: 0,
    name: '',
    'interview-date': new Date(),
    skills: {
      Angular: false,
      JavaScript: false,
      Microservicios: false,
    },
  };

  constructor() {}

  ngOnInit(): void {
    const skills = this.candidate.skills;
    this.candidateSkills = Object.keys(skills).filter((key) => skills[key]);
  }
}
