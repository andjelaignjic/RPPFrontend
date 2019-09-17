import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Racun } from "../../models/racun.model";
import { Proizvod } from "../../models/proizvod.model";
import { RacunDialogComponent } from "../racun-dialog/racun-dialog.component";
import { RacunService } from "../../services/racun.service";
import { ProizvodService } from "../../services/proizvod.service";

@Component({
  selector: 'app-stavkaracuna-dialog',
  templateUrl: './stavkaracuna-dialog.component.html',
  styleUrls: ['./stavkaracuna-dialog.component.css']
})

  export class StavkaracunaDialogComponent implements OnInit {
    
      racuni: Racun[];
      proizvodi: Proizvod[];
    
      constructor(public dialogRef: MatDialogRef<RacunDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public racunService: RacunService, public proizvodService: ProizvodService) { }
    
      ngOnInit() {
        this.racunService.getAllRacuni().subscribe(racuni =>
        this.racuni = racuni
        );
        this.proizvodService.getAllProizvodi().subscribe(proizvodi =>
        this.proizvodi = proizvodi
        );
      }
}