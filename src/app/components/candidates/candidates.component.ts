import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  @Input() candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((candidates) => {
      this.candidates = candidates;
    });
  }
}
