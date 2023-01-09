import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCameraComponent } from './device-camera.component';

describe('DeviceCameraComponent', () => {
  let component: DeviceCameraComponent;
  let fixture: ComponentFixture<DeviceCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
