<template>
  <div class="bg-gray-600 h-screen">
    <div class="mt-10 p-2">
      <ul class="text-sm" v-for="fight in fights" :key="fight.id">
        <button class="mx-auto my-1 py-2 text-white font-medium bg-gray-400 w-full" @click="setFightID(fight.id)">
          {{ fight.name }}
        </button>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "@/encounters/raids/raids-savage.json";
import { fightID, resetEncounter } from "@/functions/fight";

export default defineComponent({
  setup() {
    const fights = json;

    const setFightID = function (id: number) {
      fightID.value = id;
      resetEncounter();
    };

    return { fights, fightID, setFightID };
  },
});
</script>

<style scoped></style>
