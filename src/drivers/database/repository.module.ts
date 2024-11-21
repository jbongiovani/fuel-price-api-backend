import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqliteConfig } from '../../infrastructure/config/typeorm.config';
// import { DatabaseProvider } from './database.providers';
// import { DatabaseService } from './database.service';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(sqliteConfig)],
  providers: [],
  exports: [],
})
export class RepositoryModule {}
