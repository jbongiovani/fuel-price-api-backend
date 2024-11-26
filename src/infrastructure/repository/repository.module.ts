import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqliteConfig } from '../config/typeorm.config';
import { RepositoryService } from './repository.service';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(sqliteConfig)],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
