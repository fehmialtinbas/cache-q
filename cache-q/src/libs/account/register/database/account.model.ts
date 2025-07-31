import { ModelBase } from 'src/libs/common/model.base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AccountProps } from '../domain/account.types';

@Entity('accounts')
export class AccountModel extends ModelBase {
  constructor(props: AccountProps) {
    super(props);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  workSpaces: string[];

  @Column({ nullable: false, unique: true })
  status: string;

  @Column()
  role: string;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt?: Date = new Date();

  @Column()
  deletedAt?: Date;
}
