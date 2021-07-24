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
    <img src="/images/marker.svg" width="20" height="20" alt="marker icon" />
    <p>
      {{ home.location.address }} {{ home.location.city }}
      {{ home.location.state }}
      {{ home.location.country }}
    </p>
    <img src="/images/star.svg" width="20" height="20" alt="star icon" />
    <p>{{ home.reviewValue }}</p>
    <p>
      {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
      {{ home.bathrooms }} bath
    </p>

    <div ref="map" style="height: 800px; width: 800px"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $dataApi, error }) {
    const { data, ok, status, statusText } = await $dataApi.getHome(params.id)
    if (!ok) return error({ statusCode: status, message: statusText })

    return {
      home: data,
    }
  },
  head() {
    return {
      title: this.home.title,
    }
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    )
  },
}
</script>
