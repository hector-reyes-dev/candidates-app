import { Skills } from './skills.model';

export interface Candidate {
  id: number;
  name: string;
  'interview-date': Date;
  skills: Skills;
}
