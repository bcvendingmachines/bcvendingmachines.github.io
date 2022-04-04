import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTesterComponent } from './db-tester.component';

describe('DbTesterComponent', () => {
  let component: DbTesterComponent;
  let fixture: ComponentFixture<DbTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
