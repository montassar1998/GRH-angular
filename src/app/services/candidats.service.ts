import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatsService {
  Candidats:  Candidat[] ;
  constructor() { 

    this.Candidats= [
     
     
     /* { id:1,
      nom :'slimen',
      prenom:'hosnie',
      age: 20,
      profession:'vendeur',
      email:'hosnie@planet.tn',
      tel:28885552,
      avatar:'https://cliply.co/wp-content/uploads/2020/08/442008110_GLANCING_AVATAR_3D_400px.gif',
      Description:'passioné par le golf'
     }, */
  ];

  }

  listeCandidats():Candidat[] {
    
    return this.Candidats;
    }

    updateCand(candidat,id ){
      this.Candidats[this.Candidats.findIndex((e) => e.id==id )]=candidat;
      console.log(this.Candidats);
    }

    ajouterCandidat( prod: Candidat){
      this.Candidats.push(prod);
      console.log(this.Candidats);
      }
      

      supprimerCandidat( c: Candidat){
      
        const index = this.Candidats.indexOf(c, 0);
        if (index > -1) {
        this.Candidats.splice(index, 1);
        }
        //ou Bien
        /* this.produits.forEach((cur, index) => {
        if(prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
        }
        }); */
        }

  }