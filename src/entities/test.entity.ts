import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Test {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;
}