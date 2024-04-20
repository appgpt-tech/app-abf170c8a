//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Wallet')
export class WalletEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('real', { nullable: true })
  balance: number;

  @Column('integer', { nullable: true })
  transactionHistoryId: number;
}
