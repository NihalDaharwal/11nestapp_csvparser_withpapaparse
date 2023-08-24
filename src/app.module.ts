import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { Csv2Module } from './csv2withservice/csv2.module';

@Module({
  imports: [CsvModule, Csv2Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
