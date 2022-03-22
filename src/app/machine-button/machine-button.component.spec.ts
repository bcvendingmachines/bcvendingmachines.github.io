import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineButtonComponent } from './machine-button.component';

describe('MainButtonComponent', () => {
  let component: MachineButtonComponent;
  let fixture: ComponentFixture<MachineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
