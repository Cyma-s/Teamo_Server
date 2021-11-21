import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from 'src/entities/test.entity';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
