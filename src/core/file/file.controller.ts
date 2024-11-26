import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileService } from './file.service';
import { HttpException, HttpStatus, Get } from '@nestjs/common';

@ApiTags('Files')
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/CreateTableFromCSVFile')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(csv)$/)) {
          throw new HttpException(
            'Tipo de arquivo não permitido',
            HttpStatus.UNSUPPORTED_MEDIA_TYPE,
          );
        }
        cb(null, true);
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async CreateTableFromCSVFile(@UploadedFile() file: Express.Multer.File) {
    const headerLine = await this.fileService.GetTyposFromCSVFile(file);
    return headerLine;
  }

  @Post('/ViewCSVHeader')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(csv)$/)) {
          throw new HttpException(
            'Tipo de arquivo não permitido',
            HttpStatus.UNSUPPORTED_MEDIA_TYPE,
          );
        }
        cb(null, true);
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async ViewCSVHeader(@UploadedFile() file: Express.Multer.File) {
    const headerLine = await this.fileService.readHeaderCSVFile(file);
    return headerLine;
  }
}
