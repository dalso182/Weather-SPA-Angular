import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  speedUnit = 'km/h'; // km/h or m/h
  tempUnit = 'c'; // c or f
  @Output() speedChange = new EventEmitter();
  @Output() tempChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

// emits the new temp unit
  changeTempUnit(newTempUnit) {
    this.tempUnit = newTempUnit;
    this.tempChange.emit(this.tempUnit);
  }

  // emits the new speed unit
  changeSpeedUnit(newSpeedUnit) {
    this.speedUnit = newSpeedUnit;
    this.speedChange.emit(this.speedUnit);
  }

}
