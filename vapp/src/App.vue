<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Hermes City" class="hermes-flag" src="./assets/hermes.png"/>

    <div class="grid grid-cols-2 gap-4">
      <section>
        <div class="h-card">
          <div class="font-bold text-xl mb-2">Ether</div>
          <drizzle-account units="Ether" :precision="10" />
        </div>
      </section>
      <div class="">
        <section>
          <div class="h-card">
            <h2>Torrecarey Token</h2>
            <TutorialToken />
          </div>
        </section>

        <section>
          <div class="h-card">
            <h2>Enviar Torrecarey</h2>

            <drizzle-contract
                contractName="Torrecarey"
                method="balanceOf"
                label="Tu balance"
                :methodArgs="accounts"
            />

            <drizzle-contract-form
                contractName="Torrecarey"
                method="transfer"
                :placeholders="placeholders"
            />
          </div>
        </section>
      </div>
    </div>

  </div>

  <div v-else>Loading...</div>
</template>

<script>
import TutorialToken from './components/TorrecareyInfo'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    TutorialToken,
  },

  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),

    placeholders() {
      return ['Para', 'Cantidad']
    },

    accounts() {
      return [this.activeAccount]
    },
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
