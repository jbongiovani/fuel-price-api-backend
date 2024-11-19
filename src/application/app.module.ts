import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuelModule } from './fuel/fuel.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HydrogenModule } from './hydrogen/hydrogen.module';
import { DieselModule } from './diesel/diesel.module';
import { HybridModule } from './hybrid/hybrid.module';
import { EletricModule } from './eletric/eletric.module';
import { FileModule } from './file/file.module';

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
