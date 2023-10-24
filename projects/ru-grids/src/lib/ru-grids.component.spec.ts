import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuGridsComponent } from './ru-grids.component';

describe('RuGridsComponent', () => {
  let component: RuGridsComponent;
  let fixture: ComponentFixture<RuGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
