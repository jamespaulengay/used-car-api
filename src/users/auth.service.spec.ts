import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

let service: AuthService;
describe('AuthService', () => {
  beforeEach(async () => {
    // Create a fake copy of the users service
    const fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) => {
        Promise.resolve({ id: 1, email, password });
      },
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService },
      ],
    }).compile();

    service = module.get(AuthService);
  });
});

it('can create an instance of auth service', async () => {
  expect(service).toBeDefined();
});
