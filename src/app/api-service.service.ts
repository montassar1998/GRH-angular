import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Candidat } from './models/Candidat';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url: string = 'https://baserecrus-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}
  async getPeople(): Promise<Observable<Candidat[]>> {
    console.log('getPeople ' + this.url + 'people');
    return this.http.get<Candidat[]>(this.url + 'cands.json');
  }

  async deleteCand(candidat: Candidat) {
    var docId;
    alert('del action detected');
    (await this.getPeople()).subscribe({
      //récupérer données

      next: (res) => {
        if (res) {
          alert('we found to be deleted ');
          alert('done ');
          console.log(JSON.stringify(res));

          Object.entries(res).forEach((entry) => {
            const [keyOfDoc, value] = entry;

            //checking value for id==
            Object.entries(value).forEach((entry) => {
              const [key, value] = entry;
              if (key == 'id' && value == candidat.id) {
                docId = keyOfDoc;
                alert('docid = ' + docId);
                this.http
                  .delete(this.url + 'cands/' + docId + '.json')
                  .subscribe({
                    next: (res) => {
                      alert('deleted');
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
        alert('success' + res);
      },
    });
  }
  async updateCandidat(candidat: Candidat) {
    var docId;
    alert('del action detected');
    (await this.getPeople()).subscribe({
      //récupérer données

      next: (res) => {
        if (res) {
          alert('we found to be modified ');
          alert('done ');
          console.log(JSON.stringify(res));

          Object.entries(res).forEach((entry) => {
            const [keyOfDoc, value] = entry;

            //checking value for id==
            Object.entries(value).forEach((entry) => {
              const [key, value] = entry;
              if (key == 'id' && value == candidat.id) {
                docId = keyOfDoc;
                alert('docid = ' + docId);
                this.http
                  .patch(this.url + 'cands/' + docId + '.json',candidat)
                  .subscribe( (val) => {
                    console.log("PATCH call successful value returned in body", 
                                val);
                },
                response => {
                    console.log("PATCH call in error", response);
                },
                () => {
                    console.log("The PATCH observable is now completed.");
                });
              }
            });
          });
        }
      },
    });
  }
}
