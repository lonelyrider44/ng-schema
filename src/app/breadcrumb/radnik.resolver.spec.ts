import { TestBed } from '@angular/core/testing';

import { RadnikResolver } from './radnik.resolver';

describe('RadnikResolver', () => {
  let resolver: RadnikResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RadnikResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
