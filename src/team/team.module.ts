import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { Message } from 'src/entities/message.entity';
import { User } from 'src/entities/user.entity';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member, User, Message])],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
