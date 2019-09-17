import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Proizvod } from "../models/proizvod.model";

@Injectable()
export class ProizvodService {

  private url = `${environment.API_URL}/proizvod`;

  constructor(private http : HttpClient) { }

  getAllProizvodi() : Observable<Proizvod[]>{
    return this.http.get(this.url).map(proizvodi => proizvodi as Proizvod[]);
  }

  dodajProizvod(proizvod : Proizvod) : Observable<any>{
    return this.http.post(this.url,proizvod);
  }

  izmenaProizvoda(proizvod : Proizvod) : Observable<any>{
    return this.http.put(this.url,proizvod);

  }

  brisanjeProizvoda(proizvod : Proizvod) : Observable<any>{
    return this.http.delete(`${this.url}/${proizvod.id}`);
  }
}
