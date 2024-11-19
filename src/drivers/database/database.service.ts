// user.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from './database.providers';
import { Location } from 'src/domain/entities/location.entity';

@Injectable()
export class DatabaseService {
  constructor(private readonly databaseProvider: DatabaseProvider) {}

  async getUsers(): Promise<Location[]> {
    return this.databaseProvider.getUsers();
  }
}
