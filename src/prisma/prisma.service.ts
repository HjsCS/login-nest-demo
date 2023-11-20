import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://Joe:123@cluster0.8ihvqhe.mongodb.net/nest-demo?retryWrites=true&w=majority',
        },
      },
    });
  }
}
