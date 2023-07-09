import { TestBed } from '@angular/core/testing';

import { ZadatakResolver } from './zadatak.resolver';

describe('ZadatakResolver', () => {
  let resolver: ZadatakResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ZadatakResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
