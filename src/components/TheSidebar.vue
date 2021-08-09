<template>
  <div class="bg-gray-500 h-screen">
    <div class="mt-10 bg-red-400 p-2">
      <ul class="text-sm" v-for="fight in fights" :key="fight.id">
        <button class="py-2" @click="setFightID(fight.id)">
          {{ fight.name }}
        </button>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "@/encounters/raids/raids-savage.json";
import { fightID } from "@/functions/fight";

export default defineComponent({
  setup() {
    const fights = json;

    const setFightID = function (id: number) {
      fightID.value = id;
      console.log(fightID.value);
    };

    return { fights, fightID, setFightID };
  },
});
</script>

<style scoped></style>
