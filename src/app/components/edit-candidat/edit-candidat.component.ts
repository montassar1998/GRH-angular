import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CandidatsService } from 'src/app/services/candidats.service';
@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {
  @Input() cand;// rel parent - enfant
  e:Number ;
  constructor( private candServ: CandidatsService ) {  
  }

  ngOnInit(): void {
    this.e = this.cand.id;
   
  }
  //this.candSer.update(c);
  updateCandidat(c,e){
    
    c.id=this.cand.id;
    console.log("recieved cabd " , this.cand);
    console.log("I changed " ,c);
    
    this.candServ.updateCand(c,e);
  }

}
