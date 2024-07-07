import { TestBed } from '@angular/core/testing';

import { StaticProductListService } from './static-product-list.service';

describe('StaticProductListService', () => {
  let service: StaticProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
