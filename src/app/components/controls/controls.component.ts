import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  speedUnit = 'km/h';
  tempUnit = 'c';
  @Output() onSpeedChange = new EventEmitter();
  @Output() onTempChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  changeTempUnit(newTempUnit) {
    this.tempUnit = newTempUnit;
    this.onTempChange.emit(this.tempUnit);
  }

  changeSpeedUnit(newSpeedUnit) {
    this.speedUnit = newSpeedUnit;
    this.onSpeedChange.emit(this.speedUnit);
  }

}
