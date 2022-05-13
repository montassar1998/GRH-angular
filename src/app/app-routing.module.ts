import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ControleGuard } from './controle.guard';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accessdenied', component: AccessdeniedComponent },
  {
    path: 'candidats',
    children: [
      { path: '', component: CandidatsComponent },
      { path: ':id/editcandidat', component: EditCandidatComponent },
      { path: ':id/details', component: DetailsCandidatComponent },
    ],
  },
  {
    path: 'recrues',
    loadChildren: () =>
      import('./recruemodule/recruemodule.module').then(
        (m) => m.RecruemoduleModule
      ),
    canLoad: [ControleGuard] 
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const ORANGE_ROUTING = RouterModule.forRoot(routes);
