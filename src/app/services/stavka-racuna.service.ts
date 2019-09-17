import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { StavkaRacuna } from "../models/stavka-racuna.model";

@Injectable()
export class StavkaRacunaService {

  private url = `${environment.API_URL}/stavkaRacuna`;

  constructor(private http : HttpClient) { }

  getAllStavke() : Observable<StavkaRacuna[]>{
    return this.http.get(this.url).map(stavkeRacuna => stavkeRacuna as StavkaRacuna[]);
  }

  dodajStavke(stavkaRacuna : StavkaRacuna) : Observable<any>{
    return this.http.post(this.url,stavkaRacuna);
  }

  izmenaStavke(stavkaRacuna : StavkaRacuna) : Observable<any>{
    return this.http.put(this.url,stavkaRacuna);

  }

  brisanjeStavke(stavkaRacuna : StavkaRacuna) : Observable<any>{
    return this.http.delete(`${this.url}/${stavkaRacuna.id}`);
  }
}
