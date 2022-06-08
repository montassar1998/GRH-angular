import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
 @Input() newCandidat = new Candidat();
 // event emitter from angular core
  @Output() toEdit = new EventEmitter();
constructor(private CandidatsService: CandidatsService , public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  
  addCandidat(newCand){
    newCand.id=this.CandidatsService.Candidats.length+1;
    console.log("received new candidate ",newCand);
   // this.newCandidat.nom = "";
    this.CandidatsService.ajouterCandidat(newCand);
    
    }

}
