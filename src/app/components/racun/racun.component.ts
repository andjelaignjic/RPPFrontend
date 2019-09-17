import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Racun } from "../../models/racun.model";
import { RacunService } from "../../services/racun.service";
import { RacunDialogComponent } from "../../dialogs/racun-dialog/racun-dialog.component";
import { PotvrdaDialogComponent } from "../../dialogs/potvrda-dialog/potvrda-dialog.component";


@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'nacinPlacanja', 'actions'];
  dataSource: MatTableDataSource<Racun>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private racunService: RacunService,private dialog: MatDialog) { }

  ngOnInit() {
    this.ucitajRacune();
    
  }

  ucitajRacune(){
    this.racunService.getAllRacuni().subscribe(racuni => {
      this.dataSource = new MatTableDataSource<Racun>(racuni);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {} ) 
  }

  dodavanje(){
    const dialogRef = this.dialog.open(RacunDialogComponent, {
      width: '250px',
      data: new Racun(-1,new Date,'')
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.racunService.dodajRacun(result).subscribe(racun => {this.ucitajRacune()}, error => {})

    });
  }

  izmena(racun : Racun){
    const dialogRef = this.dialog.open(RacunDialogComponent, {
      width: '250px',
      data: racun
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }
      this.racunService.izmenaRacuna(result).subscribe(racun => {this.ucitajRacune()}, error => {})

    });
  }

  brisanje(racun : Racun){
    const dialogRef = this.dialog.open(PotvrdaDialogComponent, {
      width: '250px',
      data: racun
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('fdfs');
      if(!result){
        return
      }
      this.racunService.brisanjeRacuna(racun).subscribe(racun => {this.ucitajRacune()}, error => {})

    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
