import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvService {
  getCsv() {
    return 'working propely deployed in vercel';
  }
}
