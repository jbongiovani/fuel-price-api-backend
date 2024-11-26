import { Injectable, UploadedFile } from '@nestjs/common';
import * as csv from 'csv-parser';

@Injectable()
export class FileService {
  async readFullCSVFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any[]> {
    const buffer = file.buffer;
    const csvParser = csv();
    const rows: any[] = [];

    return new Promise((resolve, reject) => {
      csvParser.on('data', (row) => {
        rows.push(row);
      });
      csvParser.on('end', () => {
        resolve(rows);
      });
      csvParser.on('error', (err) => {
        reject(err);
      });
      csvParser.write(buffer);
      csvParser.end();
    });
  }

  async readHeaderCSVFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const buffer = file.buffer;
      csv()
        .on('headers', (headers) => {
          resolve(headers);
        })
        .on('error', (err) => {
          reject(err);
        })
        .end(buffer);
    });
  }

  async GetTyposFromCSVFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ [key: string]: string }[]> {
    return new Promise((resolve, reject) => {
      const buffer = file.buffer;
      csv()
        .on('headers', (headers) => {
          const tipo = headers.reduce((acc, header) => {
            acc[header] = 'string';
            return acc;
          }, {});
          const tipoListado = Object.keys(tipo).map((key) => ({
            [key]: tipo[key],
          }));
          resolve(tipoListado);
        })
        .on('error', (err) => {
          reject(err);
        })
        .end(buffer);
    });
  }
}
