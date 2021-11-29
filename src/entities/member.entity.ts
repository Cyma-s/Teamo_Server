import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Member {
    @PrimaryColumn()
	team_id: string

    @PrimaryColumn()
    member: string;

	@Column()
	state: string
}