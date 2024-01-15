import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Service */
import { UserService } from 'src/user/user.service';
/** Controller */
import { UserController } from 'src/user/user.controller';
/** Entity */
import { UserModel } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
