import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posting } from 'src/entities/posting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostingService {
	constructor(
		@InjectRepository(Posting)
		private postingRepo: Repository<Posting>
	){}

	async makeNewPosting(n_p, id) {
		const posting = {
			"title" : n_p.title,
			"content" : n_p.content,
			"writer": id,
			"writer_intro": n_p.writer_intro,
			"member_number": n_p.member_number,
			"subject": n_p.subject,
			"semester": n_p.semester,
			"professor": n_p.professor,
			"class": n_p.class
		}
		await this.postingRepo.insert(posting)
	}

	async getMyPostings(id: string) {
		const myPostings = await this.postingRepo.findAndCount({
			order: {
				date: 'DESC'
			},
			take: 20,
			where: {
				"writer": id
			}
		})

		return {
			"postings": myPostings[0],
			"number": myPostings[1]
		}
	}

	async joinToTeam(id, teamId) {
		const member = {
			"team_id": teamId,
			"member": id,
			"state": "pending"
		}
	}

	/*
	async getMyEnrollment(id: string) {

	}*/
}
