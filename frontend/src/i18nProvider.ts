//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    User: {
      name: 'User',
      fields: {
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        referralCode: 'Referral Code',
        id: 'id',
      },
    },
    Bet: {
      name: 'Bet',
      fields: {
        betType: 'Bet Type',
        betAmount: 'Bet Amount',
        bankAccountNumber: 'Bank Account Number',
        ifcCode: 'Ifc Code',
        bankName: 'Bank Name',
        walletFacility: 'Wallet Facility',
        id: 'id',
      },
    },
    Transaction: {
      name: 'Transaction',
      fields: {
        transactionMethod: 'Transaction Method',
        transactionAmount: 'Transaction Amount',
        transactionDate: 'Transaction Date',
        userId: 'User Id',
        transactionStatus: 'Transaction Status',
        id: 'id',
      },
    },
    Wallet: {
      name: 'Wallet',
      fields: {
        userId: 'User Id',
        balance: 'Balance',
        transactionHistoryId: 'Transaction History Id',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    User: {
      name: 'User (fr)',
      fields: {
        phoneNumber: 'Phone Number (fr)',
        emailAddress: 'Email Address (fr)',
        referralCode: 'Referral Code (fr)',
        id: 'id',
      },
    },
    Bet: {
      name: 'Bet (fr)',
      fields: {
        betType: 'Bet Type (fr)',
        betAmount: 'Bet Amount (fr)',
        bankAccountNumber: 'Bank Account Number (fr)',
        ifcCode: 'Ifc Code (fr)',
        bankName: 'Bank Name (fr)',
        walletFacility: 'Wallet Facility (fr)',
        id: 'id',
      },
    },
    Transaction: {
      name: 'Transaction (fr)',
      fields: {
        transactionMethod: 'Transaction Method (fr)',
        transactionAmount: 'Transaction Amount (fr)',
        transactionDate: 'Transaction Date (fr)',
        userId: 'User Id (fr)',
        transactionStatus: 'Transaction Status (fr)',
        id: 'id',
      },
    },
    Wallet: {
      name: 'Wallet (fr)',
      fields: {
        userId: 'User Id (fr)',
        balance: 'Balance (fr)',
        transactionHistoryId: 'Transaction History Id (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
