import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuUserProfileComponent } from './ru-user-profile.component';

describe('RuUserProfileComponent', () => {
  let component: RuUserProfileComponent;
  let fixture: ComponentFixture<RuUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
