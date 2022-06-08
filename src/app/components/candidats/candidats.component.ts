import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatsService } from 'src/app/services/candidats.service';
@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  @Input() candidats : Candidat[];
   
  constructor(private CandidatsService: CandidatsService ) {
   
    }

  ngOnInit(): void {
    this.candidats = this.CandidatsService.listeCandidats();
    

  }
  
  
  supprimerCandidat(c: Candidat)
  {
  console.log(c);
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.CandidatsService.supprimerCandidat(c);
  }

  


}