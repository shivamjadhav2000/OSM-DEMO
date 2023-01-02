<template>
  <div class="home">
    <OSMMap />
  </div>
</template>

<script>
// @ is an alias to /src
import OSMMap from "@/components/OSMMap.vue";

export default {
  name: "HomeView",
  components: {
    OSMMap,
  },
};
</script>
<style>
.home {
  display: flex;
  justify-content: center;
}
</style>
