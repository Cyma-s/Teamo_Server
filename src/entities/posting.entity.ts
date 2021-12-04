import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Posting {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

	@Column({type: 'longtext'})
    content: string;

	@CreateDateColumn({type: "timestamp"})
    date: Date;

	@Column()
	writer: string;

	@Column()
	member_number: string;

	@Column()
	subject: string;

	@Column()
	semester: string;

	@Column()
	professor: string;

	@Column()
	class: string;
}