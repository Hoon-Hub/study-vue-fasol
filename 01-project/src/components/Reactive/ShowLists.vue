<template lang="">
  <div>
    <div class="w-full mt-12">
      <h2 class="text-2xl mb-2">Computed</h2>
      <p>출간체크 : [ {{ publishedBooksMessage }} ]</p>
      책리스트 :
      <span v-for="(book, index) in author.books"
        >[{{ index + 1 }}] {{ book }},
      </span>
      <span v-if="author.books.length === 0">책 목록이 없습니다.</span>
      <br />
      <button
        type="button"
        @click="decreaseBook"
        class="border rounded p-2 mt-3"
      >
        책없애기
      </button>
    </div>
  </div>
</template>
<script>
import { author } from "./Reactive.js";
export default {
  data() {
    return {
      author,
    };
  },
  methods: {
    decreaseBook() {
      this.author.books.shift();
    },
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
</script>
<style lang=""></style>
