import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Files')
@Controller('Files')
export class FileController {
  @Get()
  findAll(): string {
    return 'retorna lista de arquivos enviados, esse registro apenas retorna o nome do arquivo, nao deve ter armazenamento de arquivo';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('arquivo'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        arquivo: {
          type: 'string',
          format: 'binary',
          description: 'Arquivo CSV',
          example: 'arquivo.csv',
        },
      },
    },
  })
  upload(@UploadedFile() arquivo: Express.Multer.File) {
    throw new HttpException(
      'Este endpoint ainda nao foi implementado está em desenvolvimento',
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
