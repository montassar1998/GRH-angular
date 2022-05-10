import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatsService } from 'src/app/services/candidats.service';
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
newCandidat = new Candidat();
constructor(private CandidatsService: CandidatsService ) {
  }

  ngOnInit(): void {
  }

  addCandidat(){
    console.log(this.newCandidat);
    this.CandidatsService.ajouterCandidat(this.newCandidat);
    }

}
