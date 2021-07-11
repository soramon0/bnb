<template>
  <div>
    <div class="flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        :alt="home.title"
        width="200"
        height="150"
      />
    </div>
    <h1>{{ home.title }}</h1>
    <p>{{ home.pricePerNight }} / night</p>
  </div>
</template>

<script>
import homes from '~/data/homes.json'

export default {
  data() {
    return {
      home: {},
    }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
  },
}
</script>
