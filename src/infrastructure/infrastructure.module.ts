import { Module } from '@nestjs/common';
// import { InfrastructureService } from './infrastructure.service';
import { DomainModule } from 'src/domain/domain.module';
import { RepositoryModule } from './repository/repository.module';
import { RepositoryService } from './repository/repository.service';

@Module({
  imports: [DomainModule, RepositoryModule],
  controllers: [],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class InfrastructureModule {}
