import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CandidatsComponent } from './components/candidats/candidats.component';
import { RecruesComponent } from './components/recrues/recrues.component';
import { FormsModule } from '@angular/forms';
import { AddCandidatComponent } from './components/add-candidat/add-candidat.component';
import { EditCandidatComponent } from './components/edit-candidat/edit-candidat.component';
import { DetailsCandidatsComponent } from './components/details-candidats/details-candidats.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidatsComponent,
    RecruesComponent,
    AddCandidatComponent,
    EditCandidatComponent,
    DetailsCandidatsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
