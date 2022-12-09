import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
