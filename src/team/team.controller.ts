import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
	constructor(
		private readonly teamService: TeamService
	){}

	@UseGuards(JwtAuthGuard)
	@Get('request/:teamId')
	async joinToTeam(@Request() req, @Param('teamId') teamId) {
		await this.teamService.joinToTeam(req.user.userId, teamId)
	}

	@UseGuards(JwtAuthGuard)
	@Get('approval/:teamId')
	async approve(@Request() req, @Param('teamId') teamId) {
		await this.teamService.approve(req.user.userId, teamId)
	}

	@UseGuards(JwtAuthGuard)
	@Get('rejection/:teamId')
	async reject(@Request() req, @Param('teamId') teamId) {
		await this.teamService.reject(req.user.userId, teamId)
	}

	@Get('/member/:team_id')
	async getMembers(@Param('team_id') team_id) {
		return await this.teamService.getMembers(team_id)
	}

	@UseGuards(JwtAuthGuard)
	@Post('message')
	async sendMessage(@Request() req, @Body() message) {
		await this.teamService.sendMessage(message, req.user.userId)
	}

	@UseGuards(JwtAuthGuard)
	@Get('message/:team_id/:sender_id')
	async getMessage(@Request() req, @Param('team_id') team_id, @Param('sender_id') sender_id) {
		return await this.teamService.getMessage(req.user.userId, team_id, sender_id)
	}

	@Delete('message/:team_id/:sender_id/:receiver_id')
	async deleteMessage(@Param('team_id') team_id, @Param('sender_id') sender_id, @Param('receiver_id') receiver_id) {
		await this.teamService.deleteMessage(team_id, sender_id, receiver_id)
	}

	@Delete('/:team_id/:member_id')
	async delete(@Param('team_id') team_id, @Param('member_id') member_id) {
		await this.teamService.delete(team_id, member_id)
	}
}
