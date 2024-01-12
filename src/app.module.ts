import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Cotroller */
import { AppController } from 'src/app.controller';
/** Service */
import { AppService } from 'src/app.service';
/** Module */
import { TodoModule } from 'src/todo/todo.module';
/** 환경 변수 */
import { typeORMConfig } from 'src/config/typeorm.database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
