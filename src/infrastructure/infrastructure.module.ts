import { Module } from '@nestjs/common';
import { InfrastructureService } from './infrastructure.service';
import { DomainModule } from 'src/domain/domain.module';
import { DriversModule } from 'src/drivers/drivers.module';

@Module({
  imports: [DomainModule, DriversModule],
  controllers: [],
  providers: [InfrastructureService],
  exports: [InfrastructureService],
})
export class InfrastrucutureModule {}
