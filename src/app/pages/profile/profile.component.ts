import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  candidateId: string | null = null;
  candidate: Candidate | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params): any => {
          this.candidateId = params.get('id');
          if (this.candidateId) {
            console.log(this.candidateId);
          }
        })
      )
      .subscribe((data: any) => {
        this.candidate = data;
      });
  }
}
