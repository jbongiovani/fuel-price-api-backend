import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de captura de combustíveis e produtos de veículos!';
  }
}
