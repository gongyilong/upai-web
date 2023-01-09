import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdSourcingComponent } from './crowd-sourcing.component';

describe('CrowdSourcingComponent', () => {
  let component: CrowdSourcingComponent;
  let fixture: ComponentFixture<CrowdSourcingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdSourcingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
