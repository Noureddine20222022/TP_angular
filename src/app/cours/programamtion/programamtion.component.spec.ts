import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramamtionComponent } from './programamtion.component';

describe('ProgramamtionComponent', () => {
  let component: ProgramamtionComponent;
  let fixture: ComponentFixture<ProgramamtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramamtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramamtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
