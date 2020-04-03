import { TestBed } from '@angular/core/testing';

import { GitUsersService } from './git-users.service';

describe('GitUsersService', () => {
  let service: GitUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
