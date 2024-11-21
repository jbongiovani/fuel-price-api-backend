import { Module } from '@nestjs/common';
import { DieselController } from './diesel.controller';

@Module({
  controllers: [DieselController],
})
export class DieselModule {}
