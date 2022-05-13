import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRecrueComponent } from './fire-recrue.component';

describe('FireRecrueComponent', () => {
  let component: FireRecrueComponent;
  let fixture: ComponentFixture<FireRecrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireRecrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireRecrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
