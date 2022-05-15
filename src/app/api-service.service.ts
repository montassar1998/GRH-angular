import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Candidat } from './models/Candidat';
import { CandidatService } from './service/candidat.service';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url: string = 'https://baserecrus-default-rtdb.firebaseio.com/';
  syncDataFromDB = this.getPeople();

  constructor(private http: HttpClient, public candSer: CandidatService) {
    // alert('api is loaded');
  }
  async loadData() {
    (await this.syncDataFromDB).subscribe({
      next: (res) => {
        var rowId;
        Object.entries(res).forEach((elem) => {
          const [keyOfDoc, value] = elem;
          console.log('ahaya el value ', value);
          let obj = new Candidat();
          obj.state = false;

          //checking value for id==
          this.candSer.addCandidateToCandidats(obj);
        });
      },
    });
  }
  async getPeople(): Promise<Observable<Candidat[]>> {
    console.log('getPeople ' + this.url + 'people');
    return this.http.get<Candidat[]>(this.url + 'cands.json');
  }

  async deleteCand(candidat: Candidat) {
    var docId;
    //alert('del action detected');
    (await this.getPeople()).subscribe({
      //récupérer données

      next: (res) => {
        if (res) {
          // alert('we found to be deleted ');
          // alert('done ');
          console.log(JSON.stringify(res));

          Object.entries(res).forEach((elem) => {
            const [keyOfDoc, value] = elem;

            //checking value for id==
            Object.entries(value).forEach((elem) => {
              const [key, value] = elem;
              if (key == 'id' && value == candidat.id) {
                docId = keyOfDoc;
                alert('docid = ' + docId);
                this.http
                  .delete(this.url + 'cands/' + docId + '.json')
                  .subscribe({
                    next: (res) => {
                      //alert('deleted');
                    },
                  });
              }
            });
          });
        }
      },
    });
  }
  addCandidat(candidat: Candidat) {
    alert('here');
    let url1 = 'https://baserecrus-default-rtdb.firebaseio.com/cands.json';
    this.http.post(url1, candidat).subscribe({
      next: (res) => {
        // alert('success' + res);
      },
    });
  }
  async updateCandidat(candidat: Candidat) {
    var docId;
    //  alert('update action detected');
    (await this.getPeople()).subscribe({
      //récupérer données

      next: (res) => {
        if (res) {
          console.log(JSON.stringify(res));

          Object.entries(res).forEach((elem) => {
            const [keyOfDoc, value] = elem;

            //checking value for id==
            Object.entries(value).forEach((elem) => {
              const [key, value] = elem;
              if (key == 'id' && value == candidat.id) {
                docId = keyOfDoc;
                // alert('docid = ' + docId);
                this.http
                  .patch(this.url + 'cands/' + docId + '.json', candidat)
                  .subscribe();
              }
            });
          });
        }
      },
    });
  }
}
