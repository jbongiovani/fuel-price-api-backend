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

@Module({
  imports: [
    FuelModule,
    HydrogenModule,
    DieselModule,
    HybridModule,
    EletricModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
