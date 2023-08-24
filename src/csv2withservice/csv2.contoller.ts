import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Csv2Service } from './csv2.services';

@Controller()
export class Csv2Controller {
  constructor(private readonly csvService: Csv2Service) {}

  @Post('upload2')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const csvData = file.buffer.toString(); // Convert file buffer to string

    const parsedData = this.csvService.parseCsvData(csvData, {
      complete: (result) => {
        // Process the parsed CSV data
        console.log(result.data);
      },
      header: true, // Set this if your CSV has headers
    });
  }
}
