import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1637477360124 implements MigrationInterface {
    name = 'migration1637477360124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test\` (\`id\` varchar(36) NOT NULL, \`text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`test\``);
    }

}
