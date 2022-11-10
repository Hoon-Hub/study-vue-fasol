<template lang="">
  <div class="p-5">
    <div class="w-full">
      작성한 책명 : {{ input1 }} <br />
      <input
        type="text"
        v-model="input1"
        placeholder="Add Book Name"
        class="p-1 rounded text-black"
      />
      <button
        @click="addBook"
        type="button"
        class="border rounded border-white p-1 ml-2"
      >
        추가하기
      </button>
    </div>

    <ShowLists />
  </div>
</template>
<script>
import ShowLists from "./ShowLists.vue";
import { author } from "./Reactive.js";
export default {
  components: {
    ShowLists,
  },
  data() {
    return {
      input1: "",
      author,
    };
  },
  methods: {
    addBook() {
      if (this.input1 === "") {
        return;
      } else {
        author.books.push(this.input1);
        this.input1 = "";
      }
    },
  },
};
</script>
<style lang=""></style>
