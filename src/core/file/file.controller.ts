import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileService } from './file.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
// import multer from 'multer';

@ApiTags('Files')
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './../../drivers/files',
    }),
  )
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
  async importarDados(
    @UploadedFile() arquivo: Express.Multer.File,
  ): Promise<any[]> {
    return this.fileService.fileCSVReader(arquivo);
  }

  // @Post('upload-csv')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadCSV(@UploadedFile() file: Express.Multer.File): Promise<any[]> {
  //   return this.fileService.fileCSVReader(file.buffer.toString());
  // }

  // @Post('read-csv')
  // async readCsv(@Body() filePath: string): Promise<any[]> {
  //   return this.fileService.fileCSVReader(filePath);
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('arquivo'))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       arquivo: {
  //         type: 'string',
  //         format: 'binary',
  //         description: 'Arquivo CSV',
  //         example: 'arquivo.csv',
  //       },
  //     },
  //   },
  // })
  // upload(@UploadedFile() arquivo: Express.Multer.File) {
  //   throw new HttpException(
  //     'Este endpoint ainda nao foi implementado está em desenvolvimento',
  //     HttpStatus.NOT_IMPLEMENTED,
  //   );
  // }
}

// import {
//   Controller,
//   Get,
//   HttpException,
//   HttpStatus,
//   Post,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

// @ApiTags('Files')
// @Controller('Files')
// export class FileController {
//   @Get()
//   findAll(): string {
//     return 'retorna lista de arquivos enviados, esse registro apenas retorna o nome do arquivo, nao deve ter armazenamento de arquivo';
//   }

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('arquivo'))
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     schema: {
//       type: 'object',
//       properties: {
//         arquivo: {
//           type: 'string',
//           format: 'binary',
//           description: 'Arquivo CSV',
//           example: 'arquivo.csv',
//         },
//       },
//     },
//   })
//   upload(@UploadedFile() arquivo: Express.Multer.File) {
//     throw new HttpException(
//       'Este endpoint ainda nao foi implementado está em desenvolvimento',
//       HttpStatus.NOT_IMPLEMENTED,
//     );
//   }
// }
