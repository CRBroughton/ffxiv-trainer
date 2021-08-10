<template>
  <div class="h-screen flex content-center">
    <div class="w-full mt-10 grid grid-rows-6">
      <div class="bg-gray-500 flex items-center justify-center row-span-5">
        <img
          v-for="position in positions"
          :key="position"
          id="tank1"
          class="fixed w-16 h-16"
          src="../assets/Tank_Icon_1.png"
          alt=""
          srcset=""
        />
      </div>
      <div
        class="bg-gray-700 row-span-1 flex flex-col items-center justify-center"
      >
        <p class="p-2 text-white">Selected Raid: {{ raid[fightID].name }}</p>
        <p class="p-2 text-white">{{ battleText }}</p>
        <button
          class="bg-gray-200 p-2 rounded bottom-0 text-gray-800"
          type="submit"
          @click="generate.next()"
        >
          Click Me
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import anime from "animejs";
import { defineComponent, ref } from "vue";
import json from "@/encounters/raids/raids-savage.json";
import { fightID, positions } from "@/functions/fight";

export default defineComponent({
  setup() {
    const raid = json;
    const battleText = ref<string>("");

    const generator = function* () {
      while (true) {
        for (const iterator of positions) {
          anime({
            targets: `#${iterator}`,
            translateX: 0,
            easing: "easeInOutSine",
            duration: 400,
          });
          battleText.value = json[fightID.value].phases[0].popupText;
        }
        yield;
        for (const iterator of positions) {
          anime({
            targets: `#${iterator}`,
            translateX: 100,
            easing: "easeInOutSine",
            duration: 400,
          });
          battleText.value = json[fightID.value].phases[1].popupText;
        }
        yield;
        for (const iterator of positions) {
          anime({
            targets: `#${iterator}`,
            translateX: json[fightID.value].phases[2][`${iterator}`].coords[0],
            easing: "easeInOutSine",
            duration: 400,
          });
          battleText.value = json[fightID.value].phases[2].popupText;
        }
        yield;
      }
    };
    let generate = generator();
    return { generator, generate, battleText, fightID, raid, positions };
  },
});
</script>

<style scoped></style>
