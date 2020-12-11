const state = {
  Transactions: [
    {
      OriginalTraceAuditNo: null,
      AccountNumber: '123456789',
      TransactionTypeId: 'Debit',
      TransactionDate: '2020-08-28T03:36:33',
      BusinessDate: '2020-08-28T03:36:33',
      AvailableBalance: 400.0,
      Amount: 12.08,
      Description: 'Other: POS Transaction',
      Billed: false,
      MerchantName: 'Good Buy',
      MerchantId: 'GbLV-01',
    },
    {
      OriginalTraceAuditNo: null,
      AccountNumber: '123456789',
      TransactionTypeId: 'Debit',
      TransactionDate: '2020-08-28T03:50:01',
      BusinessDate: '2020-08-28T03:50:01',
      AvailableBalance: 400.0,
      Amount: 129.74,
      Description: 'Other: POS Transaction',
      Billed: false,
      MerchantName: 'Wally World',
      MerchantId: 'WWV-000-1220',
    },
    {
      OriginalTraceAuditNo: null,
      AccountNumber: '123456789',
      TransactionTypeId: 'Debit',
      TransactionDate: '2020-08-28T06:43:12',
      BusinessDate: '2020-08-28T06:43:12',
      AvailableBalance: 400.0,
      Amount: 8.08,
      Description: 'Other: POS Transaction',
      Billed: true,
      MerchantName: 'Quickly Gas Stop',
      MerchantId: 'QGS-01',
    },
  ],
  NotSettled: [
    {
      OriginalTraceAuditNo: null,
      AccountNumber: '123456789',
      TransactionTypeId: 'Debit',
      TransactionDate: '2020-08-28T03:36:33',
      BusinessDate: '2020-08-28T03:36:33',
      AvailableBalance: 400.0,
      Amount: 12.08,
      Description: 'Other: POS Transaction',
      MerchantName: 'Good Buy',
      MerchantId: 'GbLV-01',
    },
    {
      OriginalTraceAuditNo: null,
      AccountNumber: '123456789',
      TransactionTypeId: 'Debit',
      TransactionDate: '2020-08-28T03:50:01',
      BusinessDate: '2020-08-28T03:50:01',
      AvailableBalance: 400.0,
      Amount: 129.74,
      Description: 'Other: POS Transaction',
      MerchantName: 'Wally World',
      MerchantId: 'WWV-000-1220',
    },
  ],
}

const getters = {
  allTransactions: (state) => state.Transactions,
  getAccountNumber: (state) => state.Transactions[0].AccountNumber,
  getBalance: (state) => state.Transactions[0].AvailableBalance,
  getBilledBalance: (state) => {
    let startingBalance = state.Transactions[0].AvailableBalance
    for (let i = 0; i < state.Transactions.length; i++) {
      if (state.Transactions[i].Billed)
        startingBalance = startingBalance - state.Transactions[i].Amount
    }
    return startingBalance
  },
  getFinalBalance: (state) => {
    let balance = state.Transactions[0].AvailableBalance
    for (let i = 0; i < state.Transactions.length; i++) {
      balance = balance - state.Transactions[i].Amount
    }
    return balance
  },
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
