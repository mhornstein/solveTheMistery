import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSimulatorComponent } from './main-simulator.component';

describe('MainSimulatorComponent', () => {
  let component: MainSimulatorComponent;
  let fixture: ComponentFixture<MainSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
