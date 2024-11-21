import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { HybridTypes } from './enums/hybrid.types';

@ApiTags('Hibrido')
@Controller('hybrid')
export class HybridController {
  @Get(':type')
  @ApiQuery({ name: 'type', enum: HybridTypes, description: 'Tipo de Híbrido' })
  findAll(@Query('type') type: HybridTypes): string {
    return 'pegando informacoes do banco de locais para hibridos';
  }

  @Post()
  create(): string {
    return 'criando informacoes do banco de hibridos';
  }
}
