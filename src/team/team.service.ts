import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { Message } from 'src/entities/message.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
	constructor(
		@InjectRepository(Member)
		private memberRepo: Repository<Member>,

		@InjectRepository(User)
		private userRepo: Repository<User>,

		@InjectRepository(Message)
		private messageRepo: Repository<Message>
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

	async sendMessage(id, message) {
		console.log(message.team_id)
		const newMessage = {
			"team_id": message.team_id,
			"sender": id,
			"receiver": message.receiver,
			"content": message.content
		}
		await this.memberRepo.insert(newMessage)
	}

	async getMessage(id, team_id, sender_id) {
		return await this.messageRepo.findOne({"team_id": team_id, "sender": sender_id, "receiver": id})
	}

	async getMembers(team_id) {
		const members: Member[] = await this.memberRepo.find({"team_id": team_id})
		const memberInfos = []
		for(let member of members) {
			const user = await this.userRepo.findOne({id: member.member})
			const memberInfo = {
				"name": user.name,
				"department": user.department,
				"std_num": user.std_num,
				"state": member.state,
				"memberId": user.id
			}
			memberInfos.push(memberInfo)
		}

		return memberInfos
	}

	async deleteMessage(team_id, sender_id, receiver_id) {
		await this.messageRepo.delete({"team_id": team_id, "sender": sender_id, "receiver": receiver_id})
	}

	async delete(team_id, member_id) {
		await this.memberRepo.delete({"team_id": team_id, "member": member_id})
	}
}
