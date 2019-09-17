import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Proizvodjac } from "../models/proizvodjac.model";

@Injectable()
export class ProizvodjacService {

  private url = `${environment.API_URL}/proizvodjac`;
  

  constructor(private http : HttpClient) {}
   
  getAllProizvodjaci() : Observable<Proizvodjac[]>{
    return this.http.get(this.url).map(proizvodjaci => proizvodjaci as Proizvodjac[]);
  }

  dodajProizvodjaca(proizvodjac : Proizvodjac) : Observable<any>{
    return this.http.post(this.url,proizvodjac);
  }

  izmenaProizvodjaca(proizvodjac : Proizvodjac) : Observable<any>{
    return this.http.put(this.url,proizvodjac);

  }

  brisanjeProizvodjaca(proizvodjac : Proizvodjac) : Observable<any>{
    return this.http.delete(`${this.url}/${proizvodjac.id}`);
  }
}
