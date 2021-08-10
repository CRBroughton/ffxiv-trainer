import { ref } from "vue";
import anime from "animejs";
import json from "@/encounters/raids/raids-savage.json";

const fightID = ref<number>(0);
const positions: string[] = ["tank1", "tank2", "ranged1", "ranged2", "melee1", "melee2", "healer1", "healer2", "boss"];

const resetEncounter = () => {
  for (const iterator of positions) {
    anime({
      targets: `#${iterator}`,
      translateX: json[fightID.value].phases[0]["defaultCoords"].coords[0],
      translateY: json[fightID.value].phases[0]["defaultCoords"].coords[1],
      easing: "easeInOutSine",
      duration: 400,
    });
  }
};

export { fightID, positions, resetEncounter };
