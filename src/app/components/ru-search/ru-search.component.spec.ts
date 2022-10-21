import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuSearchComponent } from './ru-search.component';

describe('RuSearchComponent', () => {
  let component: RuSearchComponent;
  let fixture: ComponentFixture<RuSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
