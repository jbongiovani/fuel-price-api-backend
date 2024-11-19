import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqliteConfig } from '../../infrastructure/config/typeorm.config';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(sqliteConfig)],
})
export class DatabaseModule {}
