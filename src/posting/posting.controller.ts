import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
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
		await this.postingService.makeNewPosting(newPosting, req.user.id)
	}
}
