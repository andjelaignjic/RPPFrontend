import { Component, OnInit, ViewChild ,Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { StavkaRacuna } from "../../models/stavka-racuna.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { StavkaRacunaService } from "../../services/stavka-racuna.service";
import { MatDialog } from "@angular/material/dialog";
import { StavkaracunaDialogComponent } from "../../dialogs/stavkaracuna-dialog/stavkaracuna-dialog.component";
import { Racun } from "../../models/racun.model";
import { Proizvod } from "../../models/proizvod.model";
import { PotvrdaDialogComponent } from "../../dialogs/potvrda-dialog/potvrda-dialog.component";

@Component({
  selector: 'app-stavka-racuna',
  templateUrl: './stavka-racuna.component.html',
  styleUrls: ['./stavka-racuna.component.css']
})
export class StavkaRacunaComponent implements OnInit {

  displayedColumns = ['id', 'redniBroj', 'kolicina','jedinicaMere','cena','racun','proizvod','actions'];
  dataSource: MatTableDataSource<StavkaRacuna>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private stavkaRacunaService: StavkaRacunaService,private dialog: MatDialog) { }

  ngOnInit() {
    this.ucitajStavke();
  }

  ucitajStavke(){
    this.stavkaRacunaService.getAllStavke().subscribe(stavkeRacuna => {
      this.dataSource = new MatTableDataSource<StavkaRacuna>(stavkeRacuna);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {} ) 


  }

  dodavanje(){
    const dialogRef = this.dialog.open(StavkaracunaDialogComponent, {
      width: '250px',
      data: new StavkaRacuna(-1,0,0,'',0,Racun,Proizvod)
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.stavkaRacunaService.dodajStavke(result).subscribe(stavkaRacuna => {this.ucitajStavke()}, error => {})

    });
  }
  izmena(stavkaracuna : StavkaRacuna){
    const dialogRef = this.dialog.open(StavkaracunaDialogComponent, {
      width: '250px',
      data: stavkaracuna
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.stavkaRacunaService.izmenaStavke(result).subscribe(stavkaracuna => {this.ucitajStavke()}, error => {})

    });
  }

  brisanje(stavkaracuna : StavkaRacuna){
    const dialogRef = this.dialog.open(PotvrdaDialogComponent, {
      width: '250px',
      data: stavkaracuna
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(!result){
        return
      }
      this.stavkaRacunaService.brisanjeStavke(stavkaracuna).subscribe(stavkaracuna => {this.ucitajStavke()}, error => {})

    });
    
  
}
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

}
}