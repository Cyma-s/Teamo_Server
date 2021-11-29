import { Injectable } from '@nestjs/common';

@Injectable()
export class PostingService {
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
	}
}
