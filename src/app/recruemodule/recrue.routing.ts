import { RouterModule, Routes } from '@angular/router';
import { ControleguardGuard } from '../controleguard.guard';
import { DetailsCandidatComponent } from '../details-candidat/details-candidat.component';
import { DetailsRecrueComponent } from './details-recrue/details-recrue.component';
import { EditRecrueComponent } from './edit-recrue/edit-recrue.component';
import { FireRecrueComponent } from './fire-recrue/fire-recrue.component';

let sub_routes: Routes = [
  {
    path: 'recrues',
    component: DetailsRecrueComponent,
    children: [
      { path: ':id/editr', component: EditRecrueComponent },
      { path: ':id/fire', component: FireRecrueComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(sub_routes);
