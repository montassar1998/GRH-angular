import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log("I received ", this.cand);
    this.idToModify = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idToModify == -1) {
      alert('non existant ');
    }
    console.log(
      'I received ',
      this.candServ.Candidats.find((e) => e.id == this.idToModify)
    );
  }

  gotoHome() {
    console.log(this.candServ.Candidats);
    this.router.navigate(['candidats']);
  }
}
