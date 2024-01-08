import { Module } from '@nestjs/common';
/** Cotroller */
import { AppController } from 'src/app.controller';
/** Service */
import { AppService } from 'src/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
