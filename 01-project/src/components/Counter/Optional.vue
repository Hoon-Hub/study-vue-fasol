<template lang="">
  <div>
    <div class="text-2xl mb-3">
      {{ num }}
    </div>
    <button
      type="button"
      @click="calc(-1)"
      class="w-12 border rounded bg-slate-300 p-3 text-black border-b-slate-900 mr-3"
    >
      -
    </button>
    <button
      type="button"
      @click="calc(+1)"
      class="w-12 border rounded bg-slate-300 p-3 text-black border-b-slate-900"
    >
      +
    </button>
    <pre>
      
data() {
  return {
    num: 0,
  };
},
methods: {
  calc(type) {
    if (type === 1) {
      this.num++;
    } else {
      this.num--;
    }
  },
},
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    calc(type) {
      if (type === 1) {
        this.num++;
      } else {
        this.num--;
      }
    },
  },
};
</script>
<style lang=""></style>
