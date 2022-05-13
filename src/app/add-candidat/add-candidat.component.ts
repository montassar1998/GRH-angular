import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/Candidat';
import { CandidatService } from '../service/candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css'],
})
export class AddCandidatComponent implements OnInit {
  @Input() newCandidat = new Candidat();
  currentRoute: string;
  constructor(
    private candserv: CandidatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.newCandidat = new Candidat();
  }

  Insertcand(newC) {
    this.newCandidat = newC;
    console.log('add cand', newC);
    newC.state = false;
    this.candserv.addCandidateToCandidats(newC);
  }
}
