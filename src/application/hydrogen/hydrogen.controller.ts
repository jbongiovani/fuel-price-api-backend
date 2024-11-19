import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hidrogênio')
@Controller('hydrogen')
export class HydrogenController {
  @Get()
  findAll(): string {
    return 'pegando informacoes do banco de locais para hidrogenio';
  }

  @Post()
  create(): string {
    return 'criando informacoes do banco de hidrogenio';
  }
}
