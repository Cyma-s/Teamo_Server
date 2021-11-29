import { Body, Controller, Request, Post, UseGuards, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
	constructor(
		private readonly postingService: PostingService
	){}

	@UseGuards(JwtAuthGuard)
	@Post()
	async makeNewPosting(@Body() newPosting, @Request() req) {
		await this.postingService.makeNewPosting(newPosting, req.user.userId)
	}

	@UseGuards(JwtAuthGuard)
	@Get('myPostings')
	async getMyPostings(@Request() req) {
		return await this.postingService.getMyPostings(req.user.userId)
	}

	/*
	@UseGuards(JwtAuthGuard)
	@Get('enrollment')
	async getMyEnrollment(@Request() req) {
		return await this.postingService.getMyEnrollment(req.user.userId)
	}*/
}
