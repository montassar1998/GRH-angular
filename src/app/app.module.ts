import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { FormsModule } from '@angular/forms';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecruemoduleModule } from './recruemodule/recruemodule.module';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ControleGuard } from './controle.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CandidatsComponent,
    AddCandidatComponent,
    EditCandidatComponent,
    DetailsCandidatComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AccessdeniedComponent,
  ],
  imports: [BrowserModule, RecruemoduleModule, AppRoutingModule, FormsModule],
  providers: [ControleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
