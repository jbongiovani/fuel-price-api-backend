import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
  Res,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FuelService } from './fuel.service';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

  @Post('upload-csv')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      if (!file) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Nenhum arquivo foi enviado.',
        });
      }

      const filePath = path.resolve(__dirname, '../../uploads', file.filename);
      const csvData = await this.fuelService.processCSV(filePath);

      const jsonFilePath = path.resolve(
        __dirname,
        '../../uploads',
        'fuel-prices.json',
      );

      if (fs.existsSync(jsonFilePath)) {
        fs.unlinkSync(jsonFilePath);
      }

      const csvDataWithDate = {
        uploadDate: new Date().toISOString().split('T')[0],
        csvData,
      };

      fs.writeFileSync(
        jsonFilePath,
        JSON.stringify(csvDataWithDate, null, 2),
        'utf-8',
      );

      fs.unlinkSync(filePath);

      return res.status(HttpStatus.OK).json({
        message: 'Arquivo Enviado com sucesso !',
        csvData,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro processando o arquivo.',
        error: error.message,
      });
    }
  }

  @Get('prices')
  getFuelPrices(@Res() res: Response) {
    const jsonFilePath = path.resolve(
      __dirname,
      '../../uploads',
      'fuel-prices.json',
    );

    if (!fs.existsSync(jsonFilePath)) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Não foi achado nenhum registro. Faca um upload primeiro.',
      });
    }

    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    return res.status(HttpStatus.OK).json(JSON.parse(jsonData));
  }
}