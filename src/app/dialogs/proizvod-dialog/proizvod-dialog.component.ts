import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Proizvodjac } from "../../models/proizvodjac.model";
import { ProizvodjacService } from "../../services/proizvodjac.service";

@Component({
  selector: 'app-proizvod-dialog',
  templateUrl: './proizvod-dialog.component.html',
  styleUrls: ['./proizvod-dialog.component.css']
})
export class ProizvodDialogComponent implements OnInit {

  proizvodjaci: Proizvodjac[];
  
    constructor(public dialogRef: MatDialogRef<ProizvodDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public proizvodjacService: ProizvodjacService) { }
  
    ngOnInit() {
      this.proizvodjacService.getAllProizvodjaci().subscribe(proizvodjaci =>
        this.proizvodjaci = proizvodjaci
   );
  
    }

  }