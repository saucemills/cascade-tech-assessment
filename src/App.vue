<template>
  <div id="app">
    <div class="container">
      <Transactions />
    </div>
  </div>
</template>

<script>
import Transactions from './components/Transactions.vue'

export default {
  name: 'App',
  components: {
    Transactions,
  },
}
</script>

<style>
body {
  line-height: 1.5;
  background: lightgray;
}

.container {
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
