import { Injectable, UploadedFile } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as fs from 'fs';
import * as csv from 'csv-parser';
// import { UploadFileDTO } from './dto/upload-file.dto';

@Injectable()
@ApiTags('files')
export class FileService {
  constructor() {}

  @ApiOperation({ summary: 'Envia um arquivo' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Arquivo a ser enviado',
    //type: UploadFileDTO,
  })
  async fileCSVReader(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const data = [];
      const readStream = fs.createReadStream(file.path);
      readStream
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', () => {
          resolve(data);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
}
