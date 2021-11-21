import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/entities/test.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class TestService {
	constructor(
		@InjectRepository(Test) 
		private testRepo: Repository<Test>,
	){}

	async putString(userInput: string): Promise<void> {
		const obj = {
			text: userInput
		}
		await this.testRepo.insert(obj)
	}

	async showAll(): Promise<Test[]> {
		return this.testRepo.find({});
	}
}
