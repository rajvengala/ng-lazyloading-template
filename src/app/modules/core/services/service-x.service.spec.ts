import { TestBed, inject } from '@angular/core/testing';

import { ServiceXService } from './service-x.service';

describe('ServiceXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceXService]
    });
  });

  it('should be created', inject([ServiceXService], (service: ServiceXService) => {
    expect(service).toBeTruthy();
  }));
});
