<template>
  <div>
    <TheHeader />
  </div>
  <div class="grid grid-cols-10 -mt-10">
    <TheSidebar class="col-span-1" />
    <TheArena class="col-span-9" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import TheArena from "@/components/TheArena.vue";

export default defineComponent({
  components: { TheHeader, TheSidebar, TheArena },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>