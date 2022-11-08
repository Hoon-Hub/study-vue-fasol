<template lang="">
  <div class="w-full h-full text-white">
    <router-link to="/" class="w-8 h-4 border rounded bg-gray-500 p-3"
      >영화목록</router-link
    >
    <h1 class="w-full h-8 text-2xl mt-5 mb-5 text-center">Content List</h1>

    <CotentList :itemList="itemList" />
    <NewItem
      v-show="addNewButtonActive"
      @closeNewItem="closeNewItem"
      @addNewContent="addNewContent"
    />

    <div class="w-full flex items-end justify-end">
      <button
        type="button"
        class="border border-zinc-200 text-xl px-3 rounded w-36 mr-28 mt-9 hover:bg-white hover:text-gray-800"
        @click="NewItem"
        v-show="!addNewButtonActive"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import CotentList from "./CotentList.vue";
import NewItem from "./NewItem.vue";

export default {
  components: {
    CotentList,
    NewItem,
  },
  data() {
    return {
      itemList: [],
      addNewButtonActive: false,
    };
  },
  methods: {
    NewItem() {
      this.addNewButtonActive = true;
    },

    addNewContent(newContent) {
      this.itemList.push({
        title: newContent.title,
        content: newContent.content,
        date: new Date().toISOString().substring(0, 10),
      });
      this.addNewButtonActive = false;
    },

    closeNewItem() {
      this.addNewButtonActive = false;
    },
  },
};
</script>
<style lang=""></style>
