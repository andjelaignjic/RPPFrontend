import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Proizvod } from "../../models/proizvod.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ProizvodService } from "../../services/proizvod.service";
import { MatDialog } from "@angular/material/dialog";
import { PotvrdaDialogComponent } from "../../dialogs/potvrda-dialog/potvrda-dialog.component";
import { ProizvodDialogComponent } from "../../dialogs/proizvod-dialog/proizvod-dialog.component";
import { Proizvodjac } from "../../models/proizvodjac.model";

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})  
export class ProizvodComponent implements OnInit , OnChanges{
  

  displayedColumns = ['id', 'naziv', 'proizvodjac','actions'];
  dataSource: MatTableDataSource<Proizvod>;

  @Input() proizvodi: Proizvod[];
  @Input() hasProizvodi = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  constructor(private proizvodService: ProizvodService,private dialog: MatDialog) { }

  ngOnInit() {
    this.ucitajProizvode();
  }
  ngOnChanges(change: SimpleChanges) {
    this.ucitajProizvode();
   }

  ucitajProizvode(){
    this.proizvodService.getAllProizvodi().subscribe(proizvodi => {
      if (this.hasProizvodi) {
                this.proizvodi = proizvodi;
             }
      this.dataSource = new MatTableDataSource<Proizvod>(this.proizvodi);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {} ) 


  }

  dodavanje(){
    const dialogRef = this.dialog.open(ProizvodDialogComponent, {
      width: '250px',
      data: new Proizvod(-1, '',new Proizvodjac(-1, '', '', ''))
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.proizvodService.dodajProizvod(result).subscribe(proizvod => {this.ucitajProizvode()}, error => {})

    });
  }
  izmena(proizvod : Proizvod){
    const dialogRef = this.dialog.open(ProizvodDialogComponent, {
      width: '250px',
      data: proizvod
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.proizvodService.izmenaProizvoda(result).subscribe(proizvod => {this.ucitajProizvode()}, error => {})

    });
  }

  brisanje(proizvod : Proizvod){
    const dialogRef = this.dialog.open(PotvrdaDialogComponent, {
      width: '250px',
      data: proizvod
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if(!result){
        return
      }
      this.proizvodService.brisanjeProizvoda(proizvod).subscribe(proizvod => {this.ucitajProizvode()}, error => {})

    });
    
  
}
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}
