// database.provider.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from 'src/domain/entities/location.entity';


//TODO configurar conexoes e servicos para as entidades
@Injectable()
export class DatabaseProvider {
  constructor(
    @InjectRepository(Location)
    private readonly userRepository: Repository<Location>,
  ) {}

  async getUsers(): Promise<Location[]> {
    return this.userRepository.find();
  }
}
