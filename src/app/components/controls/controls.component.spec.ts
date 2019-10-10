import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import {MaterialModule} from '../../modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {City} from '../../interfaces/city';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent],
      imports: [BrowserAnimationsModule, FormsModule, MaterialModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit temp unit when changed', async(() => {
    spyOn(component.tempChange, 'emit');
    component.changeTempUnit('f');
    fixture.detectChanges();
    expect(component.tempChange.emit).toHaveBeenCalledWith('f');
  }));

  it('should emit speed unit when changed', async(() => {
    spyOn(component.speedChange, 'emit');
    component.changeSpeedUnit('m/h');
    fixture.detectChanges();
    expect(component.speedChange.emit).toHaveBeenCalledWith('m/h');
  }));


});
