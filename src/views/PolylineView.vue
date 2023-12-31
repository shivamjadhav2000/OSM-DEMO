<template>
  <div>
    <l-map
      ref="map"
      style="width: 100em; height: 600px"
      :zoom="zoom"
      :center="center"
    >
      <l-polyline :lat-lngs="polyline.latlngs" color="green"></l-polyline>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>
<script>
import { LPolyline } from "vue2-leaflet";
export default {
  name: "PolylineView",
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 14,
      center: [17.4436222, 78.3519638],
      polyline: {
        latlngs: [
          [17.4436222, 78.3519638],
          [17.420637, 78.384465],
          [17.401145, 78.41324],
        ],
        color: "green",
      },
    };
  },
  components: {
    LPolyline,
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
