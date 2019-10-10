import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import {ControlsComponent} from '../../components/controls/controls.component';
import {MaterialModule} from '../../modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {SpeedPipe} from '../../pipes/speed.pipe';
import {TempPipe} from '../../pipes/temp.pipe';
import {WeatherService} from '../../services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent, ControlsComponent, SpeedPipe, TempPipe ],
      imports: [BrowserAnimationsModule, MaterialModule, HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
