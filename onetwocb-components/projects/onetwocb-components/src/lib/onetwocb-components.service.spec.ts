import { TestBed } from '@angular/core/testing';

import { OnetwocbComponentsService } from './onetwocb-components.service';

describe('OnetwocbComponentsService', () => {
  let service: OnetwocbComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnetwocbComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
