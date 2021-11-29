import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Member {
    @PrimaryColumn()
	team_id: string

    @Column()
    member: string;

	@Column()
	state: string
}