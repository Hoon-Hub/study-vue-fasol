<template lang="">
  <div>
    <button
      class="border rounded h-7 p-1"
      v-if="pageCount !== 1"
      @click="pageMove(-1)"
    >
      Prev
    </button>
    <button
      class="border rounded h-7 p-1"
      v-if="listCount"
      @click="pageMove(+1)"
    >
      Next
    </button>
  </div>
</template>
<script>
export default {
  props: {
    pageCount: Number,
    listCount: Boolean,
  },
  data() {
    return {
      buttonPageCount: 0,
    };
  },
  methods: {
    pageMove(destination) {
      destination > 0 ? this.buttonPageCount++ : this.buttonPageCount--;
      console.log(this.buttonPageCount);
      this.$emit("pageMove", this.buttonPageCount);
    },
  },
  mounted() {
    this.buttonPageCount = this.pageCount;
  },
};
</script>
<style lang=""></style>
