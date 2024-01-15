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
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TodoModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
