<template lang="">
  <div class="w-full text-white">
    <Header-button />

    <h1>컨텐츠 상세</h1>
    <div class="w-full"></div>
    <div class="w-5/6 flex justify-between mt-5">
      <div class="flex-1">Title: {{ paramObj.title }}</div>
      <div class="flex-1">Content: {{ paramObj.content }}</div>
      <div class="flex-1">date: {{ paramObj.date }}</div>
    </div>
  </div>
</template>
<script>
import HeaderButton from "../HeaderButton.vue";
export default {
  components: {
    HeaderButton,
  },
  props: {
    item: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      paramObj: {},
    };
  },
  mounted() {
    this.paramObj = JSON.parse(this.$route.params.item);
  },
};
</script>
<style lang=""></style>
