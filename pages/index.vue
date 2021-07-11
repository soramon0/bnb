<template>
  <div class="flex justify-between">
    <home-card v-for="home in homes" :key="home.objectID" :home="home" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import homes from '~/data/homes.json'

export default Vue.extend({
  data() {
    return {
      homes: homes.slice(0, 3),
    }
  },
  head() {
    return {
      title: 'Homepage',
    }
  },
})
</script>
