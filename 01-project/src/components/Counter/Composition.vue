<template lang="">
  <div>
    <div class="text-2xl mb-3">
      {{ numb }}
    </div>
    <button
      type="button"
      @click="calc(-1)"
      class="w-12 border rounded bg-slate-300 p-3 text-black border-b-slate-900 mr-3"
    >
      -
    </button>
    <button
      type="button"
      @click="calc(+1)"
      class="w-12 border rounded bg-slate-300 p-3 text-black border-b-slate-900"
    >
      +
    </button>
    <pre>
      
import { ref } from "vue";
let numb = ref(0);
const compositionAPI = ``;

function calc(type) {
  if (type === 1) {
    numb.value++;
  } else {
    numb.value--;
  }
}
    </pre>
  </div>
</template>
<script setup>
import { ref } from "vue";

let numb = ref(0);
const compositionAPI = ``;

function calc(type) {
  if (type === 1) {
    numb.value++;
  } else {
    numb.value--;
  }
}
</script>
<style lang=""></style>
