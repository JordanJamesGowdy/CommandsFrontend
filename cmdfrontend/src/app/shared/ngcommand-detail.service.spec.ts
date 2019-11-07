import { TestBed } from '@angular/core/testing';

import { NgcommandDetailService } from './ngcommand-detail.service';

describe('NgcommandDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgcommandDetailService = TestBed.get(NgcommandDetailService);
    expect(service).toBeTruthy();
  });
});
