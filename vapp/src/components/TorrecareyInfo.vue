<template>
  <div v-if="isDrizzleInitialized">
    <drizzle-contract
        contractName="Torrecarey"
        method="symbol"
        label="Símbolo"
    />
    <drizzle-contract
        contractName="Torrecarey"
        method="name"
        label="Nombre"
    />

    <drizzle-contract
      contractName="Torrecarey"
      method="totalSupply"
      label="Suministro total"
    />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TutorialToken',
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
  }
}
</script>

<style></style>
