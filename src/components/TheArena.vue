<template>
  <div class="h-screen bg-green-400 flex content-center">
    <div class="w-full mt-10 grid grid-rows-6">
      <div
        class="bg-yellow-200 m-2 flex items-center justify-center row-span-5"
      >
        <img
          id="mar"
          class="fixed w-16 h-16 border-2 border-dotted border-yellow-200"
          src="../assets/Tank_Icon_1.png"
          alt=""
          srcset=""
        />
      </div>
      <div
        class="
          m-2
          rounded
          bg-gray-400
          row-span-1
          flex flex-col
          items-center
          justify-center
        "
      >
        <p class="p-2">Selected Raid: {{ raid[fightID].name }}</p>
        <p class="p-2">{{ battleText }}</p>
        <button
          class="bg-red-700 p-2 rounded bottom-0"
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
import { fightID } from "@/functions/fight";

export default defineComponent({
  setup() {
    const raid = json;
    const battleText = ref<string>("");

    const generator = function* () {
      while (true) {
        anime({
          targets: "#mar",
          translateX: raid[fightID.value].phases[0].tank1Pos[0],
          easing: "easeInOutSine",
          duration: 400,
        });
        battleText.value = raid[fightID.value].phases[0].popupText;
        yield;
        anime({
          targets: "#mar",
          translateX: raid[fightID.value].phases[1].tank1Pos[0],
          easing: "easeInOutSine",
          duration: 400,
        });
        battleText.value = raid[fightID.value].phases[1].popupText;
        yield;
        anime({
          targets: "#mar",
          translateX: raid[fightID.value].phases[2].tank1Pos[0],
          easing: "easeInOutSine",
          duration: 400,
        });
        battleText.value = raid[fightID.value].phases[2].popupText;
        yield;
      }
    };
    let generate = generator();
    return { generator, generate, battleText, fightID, raid };
  },
});
</script>

<style scoped></style>
