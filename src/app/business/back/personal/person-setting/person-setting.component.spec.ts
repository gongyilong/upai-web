import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSettingComponent } from './person-setting.component';

describe('PersonSettingComponent', () => {
  let component: PersonSettingComponent;
  let fixture: ComponentFixture<PersonSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
