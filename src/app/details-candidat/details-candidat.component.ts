import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../service/candidat.service';
@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.css'],
})
export class DetailsCandidatComponent implements OnInit {
  @Input() cand;
  constructor(
    public candServ: CandidatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  id_de_rand_recu;
  ngOnInit(): void {
    this.id_de_rand_recu = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id_de_rand_recu);

    this.cand = this.candServ.Candidats[this.id_de_rand_recu - 1];
    console.log('received cand detail ', this.candServ.Candidats);
  }
  gotoHome() {
    console.log(this.candServ.Candidats);
    this.router.navigate(['candidats']);
  }
}
