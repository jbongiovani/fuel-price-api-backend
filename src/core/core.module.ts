import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { DieselModule } from './diesel/diesel.module';
import { HybridModule } from './hybrid/hybrid.module';
import { ElectricModule } from './electric/electric.module';
import { FileModule } from './file/file.module';
import { FuelModule } from './fuel/fuel.module';
import { HydrogenModule } from './hydrogen/hydrogen.module';
import { DomainModule } from 'src/domain/domain.module';
import { CoreController } from './core.controller';
// import { DriversModule } from 'src/drivers/drivers.module';
import { CoreProvider } from './core.provider';
import { FileService } from './file/file.service';

@Module({
  imports: [
    DomainModule,
    //DriversModule,
    FuelModule,
    FileModule,
    DieselModule,
    HybridModule,
    ElectricModule,
    HydrogenModule,
  ],
  controllers: [CoreController],
  providers: [CoreService, CoreProvider, FileService],
  exports: [CoreService],
})
export class CoreModule {}
