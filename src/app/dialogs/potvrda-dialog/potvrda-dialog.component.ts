import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-potvrda-dialog',
  templateUrl: './potvrda-dialog.component.html',
  styleUrls: ['./potvrda-dialog.component.css']
})
export class PotvrdaDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<PotvrdaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
  }

}
