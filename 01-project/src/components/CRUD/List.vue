<template lang="">
  <div>
    <div v-for="(item, index) in store.list" :key="index">
      <span @click="updateItem(item, index)">{{ item.name }}</span>
      <button @click="deleteItem(item.date)" class="border rounded px-2 ml-2">
        X
      </button>
    </div>
    <div class="mt-5">
      <Add v-if="updateCheck" />

      <div v-if="!updateCheck">
        <input
          type="text"
          class="rounded border border-white p-3 text-black"
          v-model="newName"
        />
        <button
          type="button"
          class="rounded border border-white p-3 text-black bg-white ml-2"
          @click="updateText"
        >
          Update
        </button>
        <button
          type="button"
          class="rounded border border-white p-3 text-black bg-white ml-2"
          @click="closeUpdate"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "./store.js";
import Add from "./Add.vue";

export default {
  components: {
    Add,
  },
  data() {
    return {
      store,
      updateCheck: true,
      updateObj: {},
      newName: "",
    };
  },
  methods: {
    deleteItem(date) {
      try {
        this.store.list = this.store.list.filter((item) => {
          return item.date !== date;
        });
      } catch (e) {
        console.log(e);
      }
    },
    updateItem(item, index) {
      this.updateCheck = false; //영역show/hide
      this.updateObj = item; //객체할당
      this.updateObj.index = index; //순서할당(update에 사용)
      this.newName = this.updateObj.name; //input 값에 이름 설정
    },
    updateText() {
      if (this.newName === "") return;
      else {
        this.store.updateItem(this.newName, this.updateObj.index);
        this.closeUpdate();
      }
    },
    closeUpdate() {
      this.updateCheck = true; //영역show/hide
    },
  },
};
</script>
<style lang=""></style>
