import { EventEmitter, Injectable, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  Candidats: Candidat[];
  Cand: Candidat;

  compteur = 0;
  estOuvert = false;
  editOuvert = true;
  constructor() {
    this.Candidats = [
      {
        id: 1,
        nom: 'Maven',
        prenom: 'sue',
        age: 32,
        profession: 'Researcher',
        email: 'Maven.sue@gmail.com',
        tel: 21203433,
        avatar:
          'https://cliply.co/wp-content/uploads/2020/10/442010812_HEADPHONES_AVATAR_3D_400px.gif',
        Description: '     Slasheuse 🦸‍♀️🤹‍♀️👩‍🎓👩‍💻👩‍🔬   ',
        find: 'any',
        state: false,
      },
      {
        id: 2,
        nom: 'Marie',
        prenom: 'lou',
        age: 23,
        profession: 'Marketing ',
        email: 'Marie.lou@gmail.com',
        tel: 21203433,
        avatar:
          'https://cliply.co/wp-content/uploads/2020/10/442010362_WINKING_AVATAR_3D_400px.gif',
        Description: ' Quality & Business analyst 👩🏼‍💻  ',
        find: 'any',
        state: false,
      },
      {
        id: 3,
        nom: 'Mathilde',
        prenom: 'simon',
        age: 32,
        profession: 'Responsable RH',
        email: 'Mathlide.simon.com',
        tel: 21203433,
        avatar:
          'https://cliply.co/wp-content/uploads/2020/10/442010361_WINKING_AVATAR_3D_400px.gif',
        Description: 'Singer 🎶🎵🎼    ',
        find: 'any',
        state: true,
      },
      {
        id: 4,
        nom: 'Foufou',
        prenom: 'lou',
        age: 45,
        profession: 'Marketing ',
        email: 'Marie.lou@gmail.com',
        tel: 21203433,
        avatar:
          'https://cliply.co/wp-content/uploads/2020/10/442010362_WINKING_AVATAR_3D_400px.gif',
        Description: ' Quality & Business analyst 👩🏼‍💻  ',
        find: 'any',
        state: true,
      },
      {
        id: 5,
        nom: 'Samia',
        prenom: 'lou',
        age: 23,
        profession: 'Marketing ',
        email: 'samia.lou@gmail.com',
        tel: 21203433,
        avatar:
          'https://cliply.co/wp-content/uploads/2020/10/442010362_WINKING_AVATAR_3D_400px.gif',
        Description: ' Quality & Business analyst 👩🏼‍💻  ',
        find: 'any',
        state: false,
      },
    ];
    this.compteur = this.Candidats.length;
  }
 

 
  listeCandidats(): Candidat[] {
    return this.Candidats;
  }
  addCandidateToCandidats(nouveauCandidat: Candidat) {
    nouveauCandidat.id = ++this.compteur;
    this.Candidats.push(nouveauCandidat);
    this.candsUpdated.emit(this.Candidats);

    console.log(this.Candidats);
  }

  @Output() candsUpdated = new EventEmitter();
  @Output() candsDeleted = new EventEmitter();

  consulterCand(id: number): Candidat {
    this.Cand = this.Cand.find((p) => p.idCand == id);
    return this.Cand;
  }

  supprimerCandidat(c: Candidat) {
    const index = this.Candidats.indexOf(c, 0);
    if (index > -1) {
      this.Candidats.splice(index, 1);
      this.candsUpdated.emit(this.Candidats);
    }
  }
}
