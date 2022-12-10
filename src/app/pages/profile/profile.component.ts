import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  candidateId: string | null = null;
  candidate: Candidate | null = null;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params): any => {
          this.candidateId = params.get('id');
          if (this.candidateId) {
            return this.candidateService.getCandidate(this.candidateId);
          }
          return [null];
        })
      )
      .subscribe((data: any) => {
        this.candidate = {
          ...data,
          'interview-date': data['interview-date']
            .toDate()
            .toLocaleDateString('es-MX'),
        };
      });
  }
}
