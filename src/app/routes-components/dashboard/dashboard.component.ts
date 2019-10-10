import { Component, OnInit } from '@angular/core';
import {City} from '../../interfaces/city';
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allCities: City[] = []; // to store al cities in the json
  selectedCities: City[] = [];// current selected cities in the dashboard
  date: Date;
  tempUnit = 'c'; // default temp unit
  speedUnit = 'km/h' // default speed unit


  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
    this.date = new Date();
  }

  getCities() {
     this.cityService.getCities().subscribe(
      response => {
        this.allCities = response;
      }
    );
  }

  // add a given city to the dashboard(selectedCities“)
  addCity(cityToAdd: City) {
    const alreadyExisits =  this.selectedCities.find(city => cityToAdd.name === city.name);
    if (!alreadyExisits) {
      this.selectedCities.push(cityToAdd);
    } else {
      console.log('city already exists');
    }
  }

  // removes a city from the dashboard (selectedCities)
  removeCity(name: string) {
    this.selectedCities = this.selectedCities.filter(city => city.name !== name);
  }
}
