<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/hermes.png" style="max-width: 200px; margin: 0 auto 24px auto"/>

    <section>
      <div class="max-w-lg rounded overflow-hidden shadow-lg m-auto">

        <div class="px-12 py-6">
          <div class="font-bold text-xl mb-2">Ether</div>
          <drizzle-account units="Ether" :precision="10" />
<!--          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>-->
<!--          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>-->
<!--          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>-->
        </div>
      </div>
    </section>

    <section>
      <h2>Torrecarey Token</h2>
      <TutorialToken />
    </section>

    <section>
      <h2>Enviar Torrecarey</h2>
      <drizzle-contract-form
          contractName="TutorialToken"
          method="transfer"
          :placeholders="placeholders"
      />
    </section>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import TutorialToken from './TutorialToken'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    TutorialToken,
  },

  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    placeholders() {
      return ['Para', 'Cantidad']
    }
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
