import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostingModule } from './posting/posting.module';
import { TeamModule } from './team/team.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TestModule,
    UserModule,
    AuthModule,
    PostingModule,
    TeamModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
