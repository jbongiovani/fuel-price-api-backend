import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
// import { DatabaseService } from './database/database.service';
import { RepositoryModule } from './database/repository.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    DomainModule,
    RepositoryModule,
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DriversModule {}
