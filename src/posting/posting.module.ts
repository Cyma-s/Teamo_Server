import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posting } from 'src/entities/posting.entity';
import { PostingController } from './posting.controller';
import { PostingService } from './posting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posting])],
  controllers: [PostingController],
  providers: [PostingService]
})
export class PostingModule {}
