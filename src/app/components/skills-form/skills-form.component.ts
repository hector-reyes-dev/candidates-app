import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
})
export class SkillsFormComponent implements OnChanges {
  @Input() candidateId: string = '';
  @Input() candidateSkills: any = {};

  skillsForm: FormGroup = this.fb.group({
    Angular: [false],
    JavaScript: [false],
    Microservicios: [false],
  });

  get skillsList() {
    return Object.keys(this.candidateSkills);
  }

  constructor(
    private fb: FormBuilder,
    private candidatesService: CandidateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.candidateSkills) {
      this.skillsForm.reset(this.candidateSkills);
    }
  }

  onSubmit() {
    this.candidatesService.updateCandidateSkills(
      this.candidateId,
      this.skillsForm.value
    );
  }
}
