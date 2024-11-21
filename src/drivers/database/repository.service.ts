import { Injectable } from '@nestjs/common';
import { RepositoryProvider } from './repository.providers';
// import { Location } from 'src/domain/entities/location.entity';
// import { File } from 'buffer';

@Injectable()
export class RepositoryService {
  constructor(private readonly repositoryProvider: RepositoryProvider) {}

  // async importData(file: File): Promise<Location[]> {
  //   return this.repositoryProvider.getLocations();
  // }
}
