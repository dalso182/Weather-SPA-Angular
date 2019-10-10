import { Component, OnInit } from '@angular/core';
import {City} from '../../interfaces/city';
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allCities: City[] = [];
  selectedCities: City[] = [];
  date: Date;
  tempUnit = 'c';
  speedUnit = 'km/h'


  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
    this.date = new Date();
  }

  getCities() {
     this.cityService.getCities().subscribe(
      response => {
        this.allCities = response;
        console.log(this.allCities);
      }
    );
  }

  addCity(cityToAdd: City) {
    const alreadyExisits =  this.selectedCities.find(city => cityToAdd.name === city.name);
    if (!alreadyExisits) {
      this.selectedCities.push(cityToAdd);
    } else {
      console.log('city already exists');
    }
  }
  removeCity(name: string) {
    this.selectedCities = this.selectedCities.filter(city => city.name !== name);
  }
}
