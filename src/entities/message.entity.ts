import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryColumn()
	team_id: string

    @PrimaryColumn()
    sender: string;

	@PrimaryColumn()
    receiver: string;

	@Column({type: 'longtext'})
	content: string
}