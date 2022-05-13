import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecrueComponent } from './edit-recrue.component';

describe('EditRecrueComponent', () => {
  let component: EditRecrueComponent;
  let fixture: ComponentFixture<EditRecrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRecrueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
