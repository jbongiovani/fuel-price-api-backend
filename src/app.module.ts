import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuelModule } from './application/fuel/fuel.module';
import { LoggerMiddleware } from './infrastructure/middleware/logger.middleware';
import { HydrogenModule } from './application/hydrogen/hydrogen.module';
import { DieselModule } from './application/diesel/diesel.module';
import { HybridModule } from './application/hybrid/hybrid.module';
import { EletricModule } from './application/eletric/eletric.module';
import { FileModule } from './application/file/file.module';
import { DatabaseModule } from './infrastructure/database/database.module';
/*import { ConfigModule } from '@nestjs/config';
import { envValidate } from './infrastructure/config/env.validations';
import configuration from './infrastructure/config/configuration';*/

@Module({
  imports: [
    /*ConfigModule.forRoot({
      validate: envValidate,
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),*/
    FuelModule,
    HydrogenModule,
    DieselModule,
    HybridModule,
    EletricModule,
    FileModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
