import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImage1603550590003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'uuid',
          default: `uuid_generate_v4()`,
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'uuid',
        }
      ],

      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }        
      ]
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
    }

}
