import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Candidat } from '../models/Candidat';
import { AuthService } from '../service/auth.service';
import { CandidatService } from '../service/candidat.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css'],
})
export class CandidatsComponent implements OnInit {
  @Input() candidats: Candidat[];
  constructor(
    public authService: AuthService,
    public apiServ: ApiServiceService,
    public candserv: CandidatService,
    private router: Router
  ) {}
  estOuvert;

  editOuvert;
  ngOnInit(): void {
    this.candidats = this.candserv.listeCandidats().filter((e) => !e.state);
    console.log(this.candidats);
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);

    this.candserv.candsUpdated.subscribe((cand) => {
      //alert("hani houni" + cand)
      this.candidats = cand;
    });
  }

  changerEtatForm(e) {
    this.estOuvert = !this.candserv.estOuvert;
    this.candserv.estOuvert = !this.candserv.estOuvert;
    //candserv état du component (visible ou pas pour le service )
    //sert à distinger entre le fait de soumettre ou de réduire sans rien faire
    //alert(this.estOuvert+"****"+this.candserv.estOuvert)
    if (e.textContent != 'réduire') {
      e.textContent = 'réduire';
    } else {
      e.textContent = 'Ajouter un candidat';
    }
  }

  supprimerCandidat(c: Candidat) {
    console.log(c);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.candserv.supprimerCandidat(c);
      this.apiServ.deleteCand(c);
    }
  }

  gotoEditCandidate(c) {
    this.router.navigateByUrl('candidats/' + c.id + '/editcandidat');
  }
  gotoDetailsCandidate(c) {
    this.router.navigateByUrl('candidats/' + c.id + '/details');
  }

  //hire someone
  changestate(c) {
    // this.router.navigate(['recrues'])
    const posOfNewRecruit = this.candserv.Candidats.findIndex(
      (e) => e.id == c.id
    );
    this.candserv.Candidats[posOfNewRecruit].state = true;
    console.log('posOfNewRecruit ', posOfNewRecruit);
    console.log(
      'new state : ',
      this.candserv.listeCandidats()[posOfNewRecruit]
    );
    this.router.navigate(['/candidats']);
  }
}
