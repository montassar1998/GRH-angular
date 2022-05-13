import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from './models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = "https://fir-db-d9259-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }
  getPeople(): Observable<Candidat[]> {
    console.log('getPeople '+this.url + 'people')
    return this.http.get<Candidat[]>(this.url + 'people')
  }
 
  addCandidat(candidat:Candidat) {
    alert("here")
   let url1 = "https://fir-db-d9259-default-rtdb.firebaseio.com/cands.json" 
     this.http.post(url1, candidat ).subscribe(
      {next:(res)=>
        {alert("success"+ res)}
      } 
    );
  }
}
