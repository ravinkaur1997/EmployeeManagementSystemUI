import { TestBed } from '@angular/core/testing';

import { EmployeeRegistationService } from './employee-registation.service';

describe('UserRegistationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeRegistationService = TestBed.get(EmployeeRegistationService);
    expect(service).toBeTruthy();
  });
});
