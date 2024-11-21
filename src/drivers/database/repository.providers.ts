import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from 'src/domain/entities/location.entity';

//TODO configurar conexoes e servicos para as entidades
@Injectable()
export class RepositoryProvider {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async importData(file: File): Promise<Location[]> {
    return this.locationRepository.find();
  }
}
