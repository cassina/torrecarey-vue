<template>
  <div v-if="isDrizzleInitialized">
    <drizzle-contract
        contractName="TutorialToken"
        method="symbol"
        label="Símbolo"
    />
    <drizzle-contract
        contractName="TutorialToken"
        method="name"
        label="Nombre"
    />

    <drizzle-contract
      contractName="TutorialToken"
      method="totalSupply"
      label="Suministro total"
    />
    <drizzle-contract
      contractName="TutorialToken"
      method="balanceOf"
      label="Tu balance"
      :methodArgs="accounts"
    />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TutorialToken',
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['isDrizzleInitialized']),

    accounts() {
      return [this.activeAccount]
    },
  }
}
</script>

<style></style>
