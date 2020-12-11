<template>
  <div>
    <h2>Transactions for {{ getAccountNumber }}</h2>
    <h3>Beginning Balance: ${{ getBalance }}</h3>
    <div class="transactions">
      <div class="header-title">
        <h4></h4>
      </div>
      <div class="row">
        <div class="date"><strong>Date</strong></div>
        <div class="merchant"><strong>Merchant</strong></div>
        <div class="type"><strong>Type</strong></div>
        <div class="Amount"><strong>Amount</strong></div>
        <div class="Billed"><strong>Billed</strong></div>
      </div>
      <div
        v-for="transaction in allTransactions"
        :key="transaction.MerchantId"
        class="transaction"
      >
        <div class="date">
          {{ convertDate(transaction.TransactionDate) }}
        </div>
        <div class="merchant">{{ transaction.MerchantName }}</div>
        <div class="type">{{ transaction.TransactionTypeId }}</div>
        <div class="Amount">{{ transaction.Amount }}</div>
        <div class="Billed">{{ transaction.Billed ? 'Y' : 'N' }}</div>
      </div>
      <div class="ending-balance">
        <h3>Balance after billed transactions: $ {{ getBilledBalance }}</h3>
        <h3>Balance after all transactions: $ {{ getFinalBalance }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'Transactions',
  methods: {
    convertDate: function(date) {
      return moment(date, moment.ISO_8601).format('MM/DD/YY')
    },
  },
  computed: mapGetters([
    'allTransactions',
    'getAccountNumber',
    'getBalance',
    'getBilledBalance',
    'getFinalBalance',
  ]),
}
</script>

<style scoped>
.row,
.transaction {
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
}

.date {
  width: 100px;
}
.merchant {
  width: 150px;
}
.type {
  width: 100px;
}
.amount {
  width: 100px;
}
</style>
