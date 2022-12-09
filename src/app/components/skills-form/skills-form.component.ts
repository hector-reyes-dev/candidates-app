import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
})
export class SkillsFormComponent implements OnInit {
  skillsForm: FormGroup = this.fb.group({
    skills: this.fb.array([['Angular'], ['JS']]),
  });

  get skillsArr() {
    return this.skillsForm.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
