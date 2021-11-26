import { Controller, Get, Param } from '@nestjs/common';
import { Test } from 'src/entities/test.entity';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
	constructor(
		private readonly testService: TestService
	){}

	@Get('/tests')
	async showAll(): Promise<Test[]> {
		console.log("hih");
		return this.testService.showAll();
	}

	@Get('/:string')
	async putString(@Param('string') userInput: string): Promise<void> {
		this.testService.putString(userInput);
	}
}
