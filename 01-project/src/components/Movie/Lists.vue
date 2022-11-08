<template lang="">
  <div class="w-full h-full">
    <div class=""></div>
    <div v-for="(item, index) in movieItems" :key="index">
      <div class="w-full mb-3">
        <span class="text-xl" @click="showDetail(index)">{{
          item.영화명
        }}</span>
        &nbsp;
        <span>| {{ item.작가명 }} </span>
        <span> | {{ item.제작년도 }}</span>
        <br />
        <span class="text-sm item-detail" style="display: none">{{
          item.작품내용
        }}</span>
      </div>
    </div>
    <Button
      class="w-full content-between"
      :pageCount="pageCount"
      :listCount="listCount"
      @pageMove="pageMove"
    />
  </div>
</template>
<script>
import axios from "axios";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      pageCount: 1,
      itemCount: 10,
      listCount: true,
      movieItems: [],
      MOVIE_OPEN_DATA_KEY:
        "BLGdURcLAt1ycs5q9oTfR93fm8H23SgGr5MKvEA1X8iwGd8pfAKLH8eMOg69f47QyZ3cun1U93PDQy%2FQw8Nu4Q%3D%3D",
    };
  },
  methods: {
    getData() {
      axios
        .get(
          `https://api.odcloud.kr/api/15047791/v1/uddi:7d49f9d9-0073-4718-bc09-e88d15934518?page=${this.pageCount}&perPage=${this.itemCount}&serviceKey=${this.MOVIE_OPEN_DATA_KEY}`
        )
        .then((response) => {
          if (response.data) {
            if (response.data.data) {
              this.movieItems = response.data.data;
              this.listCount = this.movieItems.length < 10 ? false : true; //다음 버튼 제어
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    showDetail(index) {
      //클릭한 내용 출력
      const items = document.querySelectorAll(".item-detail")[index];
      const attr = items.style.display;

      if (attr == "none") {
        this.closeDetail();
        items.style.display = ""; // 내용 출력
      } else {
        items.style.display = "none";
      }
    },

    closeDetail() {
      const allItems = document.querySelectorAll(".item-detail");
      const totalLength = allItems.length;
      for (let i = 0; i < totalLength; i++) {
        document.querySelectorAll(".item-detail")[i].style.display = "none";
      }
    },

    pageMove(updatePage) {
      this.pageCount = updatePage;
      this.closeDetail();
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang=""></style>
