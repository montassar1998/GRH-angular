import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecrueComponent } from './details-recrue.component';

describe('DetailsRecrueComponent', () => {
  let component: DetailsRecrueComponent;
  let fixture: ComponentFixture<DetailsRecrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsRecrueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRecrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
