import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatComponent } from './components/add-candidat/add-candidat.component';
import { CandidatsComponent } from './components/candidats/candidats.component';
import { DetailsCandidatsComponent } from './components/details-candidats/details-candidats.component';
import { EditCandidatComponent } from './components/edit-candidat/edit-candidat.component';
import { LoginComponent } from './components/login/login.component';
import { RecruesComponent } from './components/recrues/recrues.component';

const routes: Routes = [
  {path:"candidats",component:CandidatsComponent},
  {path:"add-candidat",component:AddCandidatComponent},
  {path:"edit-candidat", component:EditCandidatComponent},
  {path:"details", component:DetailsCandidatsComponent},
  {path:"recrues",component:RecruesComponent},
  {path: 'login', component:LoginComponent},
  { path: "", redirectTo: "candidats", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
