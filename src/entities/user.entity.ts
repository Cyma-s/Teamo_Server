import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

	@Column()
    password: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	department: string;

	@Column()
	std_num: string;
}