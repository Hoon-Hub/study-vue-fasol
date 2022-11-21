<template lang="">
  <section v-if="hasFruit">
    <h1>Fruits</h1><br />
    <ul>
      <li
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <br />
  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <li
        v-for="fruit in reverseFruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section><hr /><br />
  <section>
    <div>
      <p>methods를 이용했을경우, 매번 계산됨 :</p>
      <h1> {{ reverseMessge() }}</h1><br />
      <p>computed를 이용했을경우, 계산된 결과 (캐싱되었기때문):</p>
      <!-- <h1> {{ reversedMessage }}</h1> -->
    </div>
    <hr /> <br />
    <p>add라는 버튼(add method) 를 통해 computed가 아닌 ref의 값을 설정(set)하여 결과적으로 computed 값을 변경시킨다.</p>
    <button @click="add">
      Add
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      fruits: ["Apple", "Bannana", "Cherry"],
      msg: "Hello Computed",
    };
  },
  computed: {
    //캐싱됨, getter 의 역할
    hasFruit() {
      return this.fruits.length > 0;
    },
    reverseFruits() {
      return this.fruits.map((fruit) => {
        return fruit.split("").reverse().join("");
      });
    },
    reversedMessage: {
      get() {
        return this.msg.split("").reverse().join("");
      },
      set(newVal) {
        this.msg = newVal;
      },
    },
  },
  methods: {
    reverseMessge() {
      return this.msg.split("").reverse().join("");
    },
    add() {
      this.reversedMessage += "?!";
      // this.msg += "!?";
    },
  },
};
</script>
<style lang="">
</style>