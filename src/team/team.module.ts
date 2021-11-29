import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
