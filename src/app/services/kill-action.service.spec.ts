import { TestBed, inject } from '@angular/core/testing';

import { KillActionService } from './kill-action.service';

describe('KillActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KillActionService]
    });
  });

  it('should be created', inject([KillActionService], (service: KillActionService) => {
    expect(service).toBeTruthy();
  }));
});
