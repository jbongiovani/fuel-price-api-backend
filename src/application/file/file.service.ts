import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { UploadFileDto } from './UploadFile.DTO';

@Injectable()
@ApiTags('files')
export class FileService {
  @ApiOperation({ summary: 'Envia um arquivo' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Arquivo a ser enviado',
    type: UploadFileDto,
  })
  upload(arquivo: UploadFileDto): string {
    throw new HttpException(
      'Este endpoint ainda nao foi implementado está em desenvolvimento',
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
