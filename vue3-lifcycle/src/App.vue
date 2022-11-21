<template lang="">
  <div class="default-app-vue">
    <h2>{{ count }}</h2>
    <p
      v-once
      @click="clickOption">
      {{ onceText }}
    </p>
    <p v-html="vhtmlTag"></p>
    <p :class="msg">
      클래스 바인딩
    </p>
    <div
      :[attr]="msg"
      @[event]="clickOption">
      {{ multiText }}
    </div>
    <hr /><br />
    <Fruits />
    <hr /><br />
    <br />
    <Watch />
  </div>
</template>
<script>
import Fruits from "./components/Fruits";
import Watch from "./components/Watch.vue";
export default {
  components: {
    Fruits,
    Watch,
  },
  data() {
    return {
      count: 2,
      onceText: "한번만 렌더링",
      multiText: "클릭시 추가됨",
      msg: "active",
      vhtmlTag: '<input type="text" placeholder="v-html tag">',
      attr: "class",
      event: "click",
    };
  },
  methods: {
    clickOption() {
      this.multiText = this.multiText + "!";
    },
  },
};
</script>
<style lang="scss">
.default-app-vue {
  padding: 5px;
}
.active {
  color: red;
}
</style>
