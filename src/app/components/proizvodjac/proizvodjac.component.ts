import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Proizvodjac } from "../../models/proizvodjac.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ProizvodjacService } from "../../services/proizvodjac.service";
import { MatDialog } from "@angular/material/dialog";
import { PotvrdaDialogComponent } from "../../dialogs/potvrda-dialog/potvrda-dialog.component";
import { ProizvodjacDialogComponent } from "../../dialogs/proizvodjac-dialog/proizvodjac-dialog.component";
import { ProizvodService } from "../../services/proizvod.service";
import { Proizvod } from "../../models/proizvod.model";

@Component({
  selector: 'app-proizvodjac',
  templateUrl: './proizvodjac.component.html',
  styleUrls: ['./proizvodjac.component.css']
})
export class ProizvodjacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa','kontakt','actions'];
  dataSource: MatTableDataSource<Proizvodjac>;
  proizvodi: Proizvod[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private proizvodjacService: ProizvodjacService,private proizvodService: ProizvodService,private dialog: MatDialog) { }

  ngOnInit() {
    this.ucitajProizvodjace();
  }

  ucitajProizvodjace(){
    this.proizvodjacService.getAllProizvodjaci().subscribe(proizvodjaci => {
      this.dataSource = new MatTableDataSource<Proizvodjac>(proizvodjaci);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {} ) 
  }

  onRowSelect(row) {
    this.proizvodService.getAllProizvodi().subscribe(data => {
      const filterProizvod =  data.filter(proizvod => proizvod.proizvodjac.id === row.id);
      if (filterProizvod.length === 0) {
        this.proizvodi = null;
      }  else {
        this.proizvodi = filterProizvod;
      }
    });
  }

  dodavanje(){
    const dialogRef = this.dialog.open(ProizvodjacDialogComponent, {
      width: '250px',
      data: new Proizvodjac(-1,'','','')
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.proizvodjacService.dodajProizvodjaca(result).subscribe(proizvodjac => {this.ucitajProizvodjace()}, error => {})

    });
  }

  izmena(proizvodjac : Proizvodjac){
    const dialogRef = this.dialog.open(ProizvodjacDialogComponent, {
      width: '250px',
      data: proizvodjac
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.proizvodjacService.izmenaProizvodjaca(result).subscribe(proizvodjac => {this.ucitajProizvodjace()}, error => {})

    });
  }


  brisanje(proizvodjac : Proizvodjac){
    const dialogRef = this.dialog.open(PotvrdaDialogComponent, {
      width: '250px',
      data: proizvodjac
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(!result){
        return
      }
      this.proizvodjacService.brisanjeProizvodjaca(proizvodjac).subscribe(proizvodjac => {this.ucitajProizvodjace()}, error => {})

    });

    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

}