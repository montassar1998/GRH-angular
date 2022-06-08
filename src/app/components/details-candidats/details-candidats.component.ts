import { Component, Input, OnInit, Output } from '@angular/core';
import { Candidat } from 'src/app/models/Candidat';
import { CandidatsService } from 'src/app/services/candidats.service';
@Component({
  selector: 'app-details-candidats',
  templateUrl: './details-candidats.component.html',
  styleUrls: ['./details-candidats.component.css']
})
export class DetailsCandidatsComponent implements OnInit {
  @Input() cand;// rel parent - enfant
    constructor(private CandidatsService: CandidatsService ) { }

  ngOnInit(): void {
  }
  
}
