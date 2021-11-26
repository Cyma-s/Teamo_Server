import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";

@Module({
  imports: [
    TestModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
