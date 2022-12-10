import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private firestore: Firestore) {}

  async getCandidate(id: string) {
    const docRef = doc(this.firestore, `candidates/${id}`);
    return (await getDoc(docRef)).data();
  }

  getCandidates(): Observable<Candidate[]> {
    const candidateRef = collection(this.firestore, 'candidates');
    return collectionData(candidateRef, { idField: 'id' }) as Observable<
      Candidate[]
    >;
  }

  async updateCandidateSkills(id: string, data: any) {
    const docRef = doc(this.firestore, `candidates/${id}`);
    const skills = { skills: data };
    return await updateDoc(docRef, skills);
  }
}
