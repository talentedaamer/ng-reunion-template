import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuIconCardComponent } from './ru-icon-card.component';

describe('RuIconCardComponent', () => {
  let component: RuIconCardComponent;
  let fixture: ComponentFixture<RuIconCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuIconCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuIconCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
