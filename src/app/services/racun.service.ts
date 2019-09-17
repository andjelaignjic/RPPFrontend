import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { Racun } from "../models/racun.model";

@Injectable()
export class RacunService {
  private url = `${environment.API_URL}/racun`;

  constructor(private http : HttpClient) { }

  getAllRacuni() : Observable<Racun[]>{
    return this.http.get(this.url).map(racuni => racuni as Racun[]);
  }

  dodajRacun(racun : Racun) : Observable<any>{
    return this.http.post(this.url,racun);
  }

  izmenaRacuna(racun : Racun) : Observable<any>{
    return this.http.put(this.url,racun);

  }

  brisanjeRacuna(racun : Racun) : Observable<any>{
    return this.http.delete(`${this.url}/${racun.id}`);
  }
}
