import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Elétrico')
@Controller('electric')
export class ElectricController {
  @Get()
  findAll(): string {
    return 'pegando informacoes do banco de locais para eletricos';
  }

  @Post()
  create(): string {
    return 'criando informacoes do banco de eletricos';
  }
}
