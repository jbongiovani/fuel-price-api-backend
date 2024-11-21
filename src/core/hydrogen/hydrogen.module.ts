import { Module } from '@nestjs/common';
import { HydrogenController } from './hydrogen.controller';

@Module({
  controllers: [HydrogenController]
})
export class HydrogenModule {}
