import { Module } from '@nestjs/common';
/** Cotroller */
import { AppController } from 'src/app.controller';
/** Service */
import { AppService } from 'src/app.service';
/** Module */
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
