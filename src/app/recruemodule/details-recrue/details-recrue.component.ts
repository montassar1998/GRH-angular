import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatService } from 'src/app/service/candidat.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-details-recrue',
  templateUrl: './details-recrue.component.html',
  styleUrls: ['./details-recrue.component.css'],
})
export class DetailsRecrueComponent implements OnInit {
  @Input() candidats: Candidat[];
  activatedRoute: any;

  constructor(public candserv: CandidatService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.candidats = this.candserv
      .listeCandidats()
      .filter((e) => e.state == true);
    console.log("started with ",this.candidats);
  }

  editRecruitee(c) {
   
    this.router.navigate(["recrues",c.id,"editr"]);
    alert('nekdeù' + c.id);
  }

  fireRecruitee(c: Candidat) {
    console.log(c);
    let conf = confirm('Etes-vous sûr ?');
    console.log(c);
    this.router.navigate(["recrues",c.id,"fire"]);

    if (conf) 
    this.candserv.supprimerCandidat(c);
    this.candidats = this.candserv.listeCandidats()
    .filter((e) => e.state == true);
   
  }
}
