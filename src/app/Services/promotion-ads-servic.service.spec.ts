import { TestBed } from '@angular/core/testing';

import { PromotionAdsServicService } from './promotion-ads-servic.service';

describe('PromotionAdsServicService', () => {
  let service: PromotionAdsServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionAdsServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
