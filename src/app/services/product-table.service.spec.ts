import { TestBed } from '@angular/core/testing';

import { ProductTableService } from './product-table.service';

describe('ProductTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductTableService = TestBed.get(ProductTableService);
    expect(service).toBeTruthy();
  });
});
