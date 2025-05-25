import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTableComponent } from './lista-table.component';

describe('ListaTableComponent', () => {
  let component: ListaTableComponent;
  let fixture: ComponentFixture<ListaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
