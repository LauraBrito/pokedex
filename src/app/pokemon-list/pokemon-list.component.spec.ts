import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemomListComponent } from './pokemon-list.component';

describe('PokemomListComponent', () => {
  let component: PokemomListComponent;
  let fixture: ComponentFixture<PokemomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemomListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
