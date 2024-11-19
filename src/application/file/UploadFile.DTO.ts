import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty({
    description: 'Nome do arquivo',
    type: 'string',
  })
  filename: string;

  @ApiProperty({
    description: 'Tipo do arquivo',
    type: 'string',
  })
  filetype: string;

  @ApiProperty({
    description: 'Arquivo a ser enviado',
    type: 'string',
    format: 'binary',
  })
  file: any;
}
