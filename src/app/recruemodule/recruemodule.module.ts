import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRecrueComponent } from './details-recrue/details-recrue.component';
import { EditRecrueComponent } from './edit-recrue/edit-recrue.component';
import { FireRecrueComponent } from './fire-recrue/fire-recrue.component';
import { SUB_ROUTING } from './recrue.routing';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsRecrueComponent,
    EditRecrueComponent,
    FireRecrueComponent,
  ],
  imports: [CommonModule, SUB_ROUTING,FormsModule],
  bootstrap:[AppComponent]
})
export class RecruemoduleModule {}
