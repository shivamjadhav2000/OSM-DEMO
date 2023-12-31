<template>
  <div>
    <div v-if="location">
      <p>location:{{ location }}</p>
      <p>address: {{ address }}</p>
    </div>
    <l-map
      ref="map"
      style="width: 100em; height: 600px"
      :zoom="zoom"
      :center="center"
    >
      <v-geosearch :options="geosearchOptions"></v-geosearch>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>
<script>
import { OpenStreetMapProvider } from "leaflet-geosearch";
import VGeosearch from "vue2-leaflet-geosearch";
export default {
  name: "GeoSearchView",
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 14,
      center: [17.4436222, 78.3519638],
      address: null,
      location: null,
      geosearchOptions: {
        style: "bar",
        provider: new OpenStreetMapProvider(),
        showMarker: true,
        autoClose: true,
        keepResult: true,
        searchLabel: "Enter address",
      },
    };
  },
  mounted() {
    this.$refs.map.mapObject.on("geosearch/showlocation", this.onSearch);
  },
  methods: {
    onSearch(value) {
      this.location = { lat: value.location.y, lng: value.location.x };
      this.address = value.location.label;
    },
  },
  components: {
    "v-geosearch": VGeosearch,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
