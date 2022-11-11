<template lang="">
  <div>
    <button
      class="rounded border border-white p-3"
      @click="areaChange"
      v-if="areaNotShown"
    >
      Add
    </button>
    <div v-if="showArea">
      <input
        class="rounded border border-white p-3 text-black"
        text="text"
        v-model="newInput"
      />
      <button
        class="rounded border border-white p-3"
        type="button"
        @click="addNewItem"
      >
        Add
      </button>
      <button
        class="rounded border border-white p-3"
        type="button"
        @click="closeArea"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script>
import { store } from "./store.js";
export default {
  data() {
    return {
      newInput: "",
      areaNotShown: true,
      showArea: false,
      store,
    };
  },
  methods: {
    areaChange() {
      this.showArea = true;
      this.areaNotShown = false;
    },
    closeArea() {
      this.showArea = false;
      this.areaNotShown = true;
      this.newInput = "";
    },
    addNewItem() {
      if (this.newInput !== "") {
        const newDate = new Date().toISOString();
        const item = {
          name: this.newInput,
          date: newDate,
        };
        this.store.addList(item);
        this.closeArea();
      }
    },
  },
};
</script>
<style lang=""></style>
