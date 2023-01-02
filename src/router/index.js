import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarkerView from "../views/MarkerView.vue";
import GeoSearchView from "../views/GeoSearchView.vue";
import PolylineView from "../views/PolylineView.vue";
import GeofenceView from "../views/GeofenceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: MarkerView,
  },
  {
    path: "/GeoSearch",
    name: "GeoSearch",
    component: GeoSearchView,
  },
  {
    path: "/Polyline",
    name: "Polyline",
    component: PolylineView,
  },
  {
    path: "/Geofence",
    name: "Geofence",
    component: GeofenceView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
