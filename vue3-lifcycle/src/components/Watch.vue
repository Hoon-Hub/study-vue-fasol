<template lang="">
  <div>
    <h1>Watch</h1>
    <p @click="changeMessage">
      {{ msg }}
    </p>
    <p>{{ reversedMessage }}</p>
    <p>Watch의 매개변수는 원하는 값으로 설정이 가능하다.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello?",
    };
  },
  computed: {
    reversedMessage() {
      return this.msg.split("").reverse().join("");
    },
  },
  watch: {
    msg(newMsg) {
      console.log("msg:::", newMsg);
    },
    reversedMessage(newMsg) {
      console.log("reversedMessage:::", newMsg);
    },
  },
  methods: {
    changeMessage() {
      this.msg = "Good!";
    },
  },
};
</script>
<style lang="">
</style>