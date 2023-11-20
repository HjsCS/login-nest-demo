import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return 'I am signin';
  }

  signup() {
    return 'I am signup';
  }
}
