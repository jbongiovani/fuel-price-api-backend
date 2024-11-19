import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Diesel')
@Controller('diesel')
export class DieselController {
  @Get()
  findAll(): string {
    return 'pegando informacoes do banco de locais para diesel';
  }

  @Post()
  create(): string {
    return 'criando informacoes do banco de diesel';
  }
}
