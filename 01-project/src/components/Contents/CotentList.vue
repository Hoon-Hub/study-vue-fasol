<template lang="">
  <div class="w-full text-center">
    <p class="w-full text-right pr-8 mb-3">
      총 컨텐츠 개수 <span>{{ itemList.length }}</span
      >개
    </p>

    <div class="w-4/5 mx-auto flex">
      <div class="w-8 h-7 border-b-slate-50">No</div>
      <div class="h-7 border-b-slate-50 flex-1">Title</div>
      <div class="w-32 h-7 border-b-slate-50">date</div>
    </div>
    <div class="w-full my-10" v-if="itemList.length < 1">
      컨텐츠가 존재하지않습니다.
    </div>

    <div class="w-4/5 mx-auto" v-else>
      <div v-for="(item, index) in itemList" class="w-full flex">
        <div class="w-8 h-7">{{ index++ }}</div>
        <div class="flex-1" @click="moveToDetail(item)">{{ item.title }}</div>
        <div class="w-32 h-7">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    itemList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    moveToDetail(item) {
      console.log(item);
      this.$router.push({
        name: "ContentDetail",
        params: { item: JSON.stringify(item) },
      });
    },
  },
};
</script>
<style scoped></style>
