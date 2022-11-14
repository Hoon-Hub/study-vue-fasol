<template lang="">
  <div>
    <div
      v-for="(user, index) in users"
      :key="index"
      class="border rounded shadow-md p-3 w-80 mb-2 flex hover:bg-slate-50"
    >
      <div class="grid grid-rows-3 p-3 flex-1">
        <p>이메일: {{ user.email }}</p>
        <p>나이: {{ user.age }}</p>
        <p>소개: {{ user.txt }}</p>
      </div>
      <div class="text-black grid grid-rows-2 w-12">
        <button
          type="button"
          class="border rounded-full hover:bg-black hover:text-white mb-1"
        >
          <nuxt-link
            :to="{ name: 'Vuex-UpdateItem', params: { itemNum: index } }"
            >Edit</nuxt-link
          >
        </button>
        <button
          @click="deleteOneUser(user)"
          type="button"
          class="border rounded-full hover:bg-black hover:text-white mt-1"
        >
          Del
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: mapState(['users']),
  data() {
    return {
      dataObj: {
        email: '',
        age: '',
        txt: '',
      },
    }
  },
  methods: {
    ...mapActions(['getUsers', 'deleteOneUser']),
  },
}
</script>
<style lang=""></style>
