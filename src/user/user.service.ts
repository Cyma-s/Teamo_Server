import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepo: Repository<User>
	){}

	async signUp(u_i: User) {		
		if(u_i.id && u_i.password && u_i.name && u_i.email && u_i.department && u_i.std_num) {
			const salt = await bcrypt.genSalt();
			const hash = await bcrypt.hash(u_i.password, salt);
			u_i.password = hash
			await this.userRepo.insert(u_i)
		}
	}

	async signIn(id: string): Promise<User | undefined> {
		return this.userRepo.findOne({id: id})
	}

	async checkEmailValidation(email:string) {
		if(await this.userRepo.findOne({email: email}))
			return "true"
		return "false"
	}

	async checkIdValidation(id:string) {
		if(await this.userRepo.findOne({id: id}))
			return "true"
		return "false"
	}

	async getUserProfile(userid) {
		const user = await this.userRepo.findOne({id: userid})
		return await {
			"name": user.name,
			"department": user.department,
			"std_num": user.std_num
		}
	}

	async deleteOne(id:string) {
		await this.userRepo.delete({id: id})
	}
}
