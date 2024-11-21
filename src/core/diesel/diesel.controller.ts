import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Location } from 'src/domain/entities/location.entity';

@ApiTags('Diesel')
@Controller('diesel')
export class DieselController {
  @Get('get')
  findAll(): string {
    const location: Location = new Location();
    location.name = 'VIX';
    return `pegando informacoes do banco de locais para diesel ${location.name}`;
  }

  @Post()
  create(): string {
    return 'enviando dados para informacoes do banco de diesel';
  }
}
