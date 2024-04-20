//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UserEntity } from './db/User.entity';
import { BetEntity } from './db/Bet.entity';
import { TransactionEntity } from './db/Transaction.entity';
import { WalletEntity } from './db/Wallet.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UserEntity,
      BetEntity,
      TransactionEntity,
      WalletEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      User: [
        {
          phoneNumber: 'phoneNumber 1',
          emailAddress: 'emailAddress 1',
          referralCode: 'referralCode 1',
          id: 40,
        },
        {
          phoneNumber: 'phoneNumber 2',
          emailAddress: 'emailAddress 2',
          referralCode: 'referralCode 2',
          id: 6,
        },
        {
          phoneNumber: 'phoneNumber 3',
          emailAddress: 'emailAddress 3',
          referralCode: 'referralCode 3',
          id: 0,
        },
        {
          phoneNumber: 'phoneNumber 4',
          emailAddress: 'emailAddress 4',
          referralCode: 'referralCode 4',
          id: 77,
        },
        {
          phoneNumber: 'phoneNumber 5',
          emailAddress: 'emailAddress 5',
          referralCode: 'referralCode 5',
          id: 7,
        },
      ],
      Bet: [
        {
          betType: 'betType 1',
          betAmount: 0.31,
          bankAccountNumber: 1,
          ifcCode: 1,
          bankName: 1,
          walletFacility: 1,
          id: 68,
        },
        {
          betType: 'betType 2',
          betAmount: 0.67,
          bankAccountNumber: 2,
          ifcCode: 2,
          bankName: 2,
          walletFacility: 2,
          id: 1,
        },
        {
          betType: 'betType 3',
          betAmount: 0.85,
          bankAccountNumber: 3,
          ifcCode: 3,
          bankName: 3,
          walletFacility: 3,
          id: 47,
        },
        {
          betType: 'betType 4',
          betAmount: 0.01,
          bankAccountNumber: 4,
          ifcCode: 4,
          bankName: 4,
          walletFacility: 4,
          id: 56,
        },
        {
          betType: 'betType 5',
          betAmount: 0.59,
          bankAccountNumber: 5,
          ifcCode: 5,
          bankName: 5,
          walletFacility: 5,
          id: 96,
        },
      ],
      Transaction: [
        {
          transactionMethod: 'transactionMethod 1',
          transactionAmount: 0.25,
          transactionDate: '2024-09-05T12:04:00.552Z',
          userId: 1,
          transactionStatus: 'transactionStatus 1',
          id: 58,
        },
        {
          transactionMethod: 'transactionMethod 2',
          transactionAmount: 0.47,
          transactionDate: '2024-10-12T01:40:11.166Z',
          userId: 2,
          transactionStatus: 'transactionStatus 2',
          id: 37,
        },
        {
          transactionMethod: 'transactionMethod 3',
          transactionAmount: 0.17,
          transactionDate: '2025-01-26T06:00:23.470Z',
          userId: 3,
          transactionStatus: 'transactionStatus 3',
          id: 6,
        },
        {
          transactionMethod: 'transactionMethod 4',
          transactionAmount: 0.4,
          transactionDate: '2023-10-27T15:02:02.826Z',
          userId: 4,
          transactionStatus: 'transactionStatus 4',
          id: 57,
        },
        {
          transactionMethod: 'transactionMethod 5',
          transactionAmount: 0.24,
          transactionDate: '2024-03-06T17:10:39.557Z',
          userId: 5,
          transactionStatus: 'transactionStatus 5',
          id: 89,
        },
      ],
      Wallet: [
        { userId: 1, balance: 0.55, transactionHistoryId: 1, id: 100 },
        { userId: 2, balance: 0.96, transactionHistoryId: 2, id: 30 },
        { userId: 3, balance: 0.43, transactionHistoryId: 3, id: 94 },
        { userId: 4, balance: 0.66, transactionHistoryId: 4, id: 14 },
        { userId: 5, balance: 0.63, transactionHistoryId: 5, id: 75 },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UserEntity', data.User);
      await this.SeedResource('BetEntity', data.Bet);
      await this.SeedResource('TransactionEntity', data.Transaction);
      await this.SeedResource('WalletEntity', data.Wallet);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}