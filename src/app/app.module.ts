import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { HeaderComponent } from './components/header/header.component';
import { DataFieldComponent } from './components/data-field/data-field.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    CandidateComponent,
    CandidatesComponent,
    HeaderComponent,
    DataFieldComponent,
    SkillsFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
