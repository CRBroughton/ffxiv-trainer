<template>
  <div class="h-screen flex content-center">
    <div class="w-full mt-10 grid grid-rows-6">
      <div class="bg-gray-500 flex items-center justify-center row-span-5">
        <img
          v-for="position in positions"
          :key="position"
          :id="position"
          class="fixed w-14 h-14"
          :src="getImgUrl(position)"
          alt=""
          srcset=""
        />
      </div>
      <div
        class="bg-gray-700 row-span-1 flex flex-col items-center justify-center"
      >
        <p class="p-2 text-white">Selected Raid: {{ json[fightID].name }}</p>
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
import { fightID, positions, currentPhases } from "@/functions/fight";

export default defineComponent({
  setup() {
    const battleText = ref<string>("");

    const getImgUrl = function (img: string) {
      return require("../assets/" + img + ".png");
    };

    const generator = function* () {
      while (true && currentPhases.value <= json[fightID.value].phases.length - 1) {
        for (const iterator of positions) {
          anime({
            targets: `#${iterator}`,
            translateX:
              json[fightID.value].phases[currentPhases.value][`${iterator}`]
                .coords[0],
            translateY:
              json[fightID.value].phases[currentPhases.value][`${iterator}`]
                .coords[1],
            easing: json[fightID.value].phases[currentPhases.value].easing,
            duration: json[fightID.value].phases[currentPhases.value].duration,
          });
          battleText.value =
            json[fightID.value].phases[currentPhases.value].popupText;
        }
        if (currentPhases.value >= json[fightID.value].phases.length - 1) {
          currentPhases.value = 0;
        } else {
          currentPhases.value++;
          yield;
        }
      }
    };
    let generate = generator();
    return {
      generator,
      getImgUrl,
      generate,
      battleText,
      fightID,
      positions,
      json,
    };
  },
});
</script>

<style scoped></style>
