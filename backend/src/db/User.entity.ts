//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  phoneNumber: string;

  @Column('text', { nullable: true })
  emailAddress: string;

  @Column('text', { nullable: true })
  referralCode: string;
}
