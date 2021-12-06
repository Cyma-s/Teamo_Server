import { Body, Controller, Get, Param, Post, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService
	){}

	@Post()
	async signUp(@Body() userInfo) {
		return await this.userService.signUp(userInfo)
	}

	@Get('/email/validation/:userEmail')
	async checkEmailValidation(@Param("userEmail") userEmail) {
		return await this.userService.checkEmailValidation(userEmail)
	}

	@Get('/id/validation/:userId')
	async checkIdValidation(@Param("userId") id) {
		return await this.userService.checkIdValidation(id)
	}

	@Get('/profile/:userid')
	async getUserProfile(@Param('userid') userid) {
	  return await this.userService.getUserProfile(userid)
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('/profile')
	async getMyProfile(@Request() req) {
		return await this.userService.getUserProfile(req.user.userId)
	}

	@Delete('/:id')
	async deleteOne(@Param('id') id) {
		await this.userService.deleteOne(id)
	}
}
