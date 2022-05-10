import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatsService } from 'src/app/services/candidats.service';
@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  candidats : Candidat[];
   
  constructor(private CandidatsService: CandidatsService ) {
    this.candidats = CandidatsService.listeCandidats();
    console.log("hello 123")
    }

  ngOnInit(): void {
  }

  
  supprimerCandidat(c: Candidat)
  {
  console.log(c);
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.CandidatsService.supprimerCandidat(c);

  }
 


}
