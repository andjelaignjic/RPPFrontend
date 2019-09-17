import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
  MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
  MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBar, MatDialogModule, MatInputModule, MatSnackBarModule, MatCheckbox, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RacunComponent } from './components/racun/racun.component';
import { FormsModule } from "@angular/forms";
import { RacunService } from "./services/racun.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RacunDialogComponent } from './dialogs/racun-dialog/racun-dialog.component';
import { PotvrdaDialogComponent } from './dialogs/potvrda-dialog/potvrda-dialog.component';
import { ProizvodjacComponent } from './components/proizvodjac/proizvodjac.component';
import { ProizvodjacService } from "./services/proizvodjac.service";
import { ProizvodjacDialogComponent } from './dialogs/proizvodjac-dialog/proizvodjac-dialog.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodDialogComponent } from './dialogs/proizvod-dialog/proizvod-dialog.component';
import { ProizvodService } from "./services/proizvod.service";
import { StavkaRacunaComponent } from './components/stavka-racuna/stavka-racuna.component';
import { StavkaracunaDialogComponent } from './dialogs/stavkaracuna-dialog/stavkaracuna-dialog.component';
import { StavkaRacunaService } from "./services/stavka-racuna.service";
import { AutorComponent } from './components/autor/autor.component';
import { PomocComponent } from './components/pomoc/pomoc.component';

const routes: Routes = [{
    path: 'racuni',
    component: RacunComponent,

},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'proizvodjac',
    component: ProizvodjacComponent
  },
  {
    path: 'proizvod',
    component: ProizvodComponent
  },
  {
    path: 'stavkaRacuna',
    component: StavkaRacunaComponent
  },
  {
    path: 'autor',
    component: AutorComponent
  },
  {
    path: 'pomoc',
    component: PomocComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RacunComponent,
    RacunDialogComponent,
    PotvrdaDialogComponent,
    ProizvodjacComponent,
    ProizvodjacDialogComponent,
    ProizvodComponent,
    ProizvodDialogComponent,
    StavkaRacunaComponent,
    StavkaracunaDialogComponent,
    AutorComponent,
    PomocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatPaginatorModule,
    FormsModule,
    HttpClientModule

  ],
  entryComponents : [RacunDialogComponent,PotvrdaDialogComponent,ProizvodjacDialogComponent,ProizvodDialogComponent,StavkaracunaDialogComponent],
  providers: [RacunService,ProizvodjacService,ProizvodService,StavkaRacunaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
