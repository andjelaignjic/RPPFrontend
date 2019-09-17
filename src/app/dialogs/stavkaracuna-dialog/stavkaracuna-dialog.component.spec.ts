import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaracunaDialogComponent } from './stavkaracuna-dialog.component';

describe('StavkaracunaDialogComponent', () => {
  let component: StavkaracunaDialogComponent;
  let fixture: ComponentFixture<StavkaracunaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaracunaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaracunaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
