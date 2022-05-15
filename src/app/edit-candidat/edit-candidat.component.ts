import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Candidat } from '../models/Candidat';
import { CandidatService } from '../service/candidat.service';
@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css'],
})
export class EditCandidatComponent implements OnInit {
  idToModify;
  constructor(
    public candServ: CandidatService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiServ: ApiServiceService
  ) {}

  ngOnInit(): void {
    // console.log("I received ", this.cand);
    this.idToModify = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idToModify == -1) {
      alert("ce candidat est indisponible");
    }
    console.log(
      'I received ',
      this.candServ.Candidats.find((e) => e.id == this.idToModify)
    );
  }

  async gotoHome() {
    console.log(this.candServ.Candidats);

    await this.apiServ.updateCandidat(
      this.candServ.Candidats.find((e) => e.id == this.idToModify)
    );
    this.router.navigate(['candidats']);
  }
}
