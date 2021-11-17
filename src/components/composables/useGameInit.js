import {onBeforeMount, ref} from "vue";

export default function useGameInit (number) {
    let difficult = ref(3);
    let cells = ref([]);

    const init = () => {
        cells.value = [];

        for (let i = 0; i < number; i++) {
            cells.value.push({
                id: i,
                clicked: false,
                value: 0,
            });
        }
    }

    onBeforeMount(init);

    return {
        difficult,
        cells,
        init
    }
}