import { Module } from '@nestjs/common';
import { EletricController } from './eletric.controller';

@Module({
  controllers: [EletricController]
})
export class EletricModule {}
