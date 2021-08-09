<template>
  <div class="bg-gray-500 h-screen">
    <div class="mt-10 bg-red-400 p-2">
      <ul class="text-sm" v-for="fight in fights" :key="fight.id">
        <button class="py-2">{{ fight.name }}</button>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "@/encounters/raids/raids-savage.json";

export default defineComponent({
  setup() {
    const fights = json;
    return { fights };
  },
});
</script>

<style scoped></style>
