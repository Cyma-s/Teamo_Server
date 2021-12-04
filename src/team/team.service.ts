import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
	constructor(
		@InjectRepository(Member)
		private memberRepo: Repository<Member>
	){}
	
	async joinToTeam(id, teamId) {
		const member = {
			"team_id": teamId,
			"member": id,
			"state": "pending"
		}
		await this.memberRepo.insert(member)
	}

	async approve(id, teamId) {
		await this.memberRepo.update({"team_id": teamId, "member": id}, {"state": "approve"})
	}

	async reject(id, teamId) {
		await this.memberRepo.update({"team_id": teamId, "member": id}, {"state": "reject"})
	}

	async getMembers(team_id) {
	}

	async delete(team_id, member_id) {
		await this.memberRepo.delete({"team_id": team_id, "member": member_id})
	}
}
