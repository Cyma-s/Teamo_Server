import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService
	){}

	@Post()
	async signUp(@Body() userInfo) {
		await this.userService.signUp(userInfo)
	}

	@Get('/email/validation/:userEmail')
	async checkEmailValidation(@Param("userEmail") userEmail) {
		return await this.userService.checkEmailValidation(userEmail)
	}

	@Get('/id/validation/:userId')
	async checkIdValidation(@Param("id") userEmail) {
		return await this.userService.checkIdValidation(userEmail)
	}
}