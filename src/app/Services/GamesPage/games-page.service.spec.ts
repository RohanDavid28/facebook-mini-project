import { TestBed } from '@angular/core/testing';

import { GamesPageService } from './games-page.service';

describe('GamesPageService', () => {
  let service: GamesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
