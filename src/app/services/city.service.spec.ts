import { TestBed } from '@angular/core/testing';

import { CityService } from './city.service';
import {HttpClientModule} from '@angular/common/http';

describe('CityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CityService = TestBed.get(CityService);
    expect(service).toBeTruthy();
  });
});
