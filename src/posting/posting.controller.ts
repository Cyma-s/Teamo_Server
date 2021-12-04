import { Body, Controller, Request, Post, UseGuards, Get, Param, Delete } from '@nestjs/common';
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
	@Get('myPostings/member/:page')
	async getMyEnrollment(@Request() req, @Param('page') page) {
		return await this.postingService.getMyEnrollment(req.user.userId, page)
	}

	@UseGuards(JwtAuthGuard)
	@Get('myPostings/host/:page')
	async getMyPostings(@Request() req, @Param('page') page) {
		return await this.postingService.getMyPostings(req.user.userId, page)
	}

	@Get('allPostings/:page')
	async getAllPostings(@Param('page') page) {
		return await this.postingService.getAllPostings(page)
	}

	@Delete('/:id')
	async delete(@Param('id') id) {
		await this.postingService.delete(id)
	}
}
