import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { Posting } from 'src/entities/posting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostingService {
	constructor(
		@InjectRepository(Posting)
		private postingRepo: Repository<Posting>,

		@InjectRepository(Member)
		private memberRepo: Repository<Member>
	){}

	async makeNewPosting(n_p, id) {
		const posting = {
			"title" : n_p.title,
			"content" : n_p.content,
			"writer": id,
			"member_number": n_p.member_number,
			"subject": n_p.subject,
			"semester": n_p.semester,
			"professor": n_p.professor,
			"class": n_p.class
		}
		await this.postingRepo.insert(posting)
	}

	async getMyPostings(id: string, page:string) {
		const myPostings = await this.postingRepo.find({
			order: {
				date: 'DESC'
			},
			skip: parseInt(page)*20,
			take: 20,
			where: {
				"writer": id
			}
		})

		return {
			"postings": myPostings,
			"number": myPostings.length
		}
	}

	async getAllPostings(page:string) {
		const allPostings = await this.postingRepo.find({
			order: {
				date: 'DESC'
			},
			skip: parseInt(page)*20,
			take: 20
		})

		return {
			"postings": allPostings,
			"number": allPostings.length
		}
	}

	async getMyEnrollment(id: string, page: string) {
		const myPostingjoinedInfo = await this.memberRepo.find({"member": id, "state": "approve"})
		let myPostingIds = myPostingjoinedInfo.map(element => element.team_id)

		const allPostings = await this.postingRepo.find({
			order: {
				date: 'DESC'
			}
		})
		
		const myPostings = []
		let count = 0
		for (const element of allPostings) {
			if(myPostingIds.includes(element.id)) {
				myPostings.push(element)
				count = count+1
			}

			if(count >= parseInt(page)*20 + 20) {
				break
			}
		}

		if(count >= parseInt(page)*20 + 1) {
			const newPostings = myPostings.slice(parseInt(page)*20)
			return {
				"postings": newPostings,
				"number": newPostings.length
			}
		}			
		return {
			"postings": [],
			"number": 0
		}
	}
}
