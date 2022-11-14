<template lang="">
  <div class="p-2">
    <HeaderNav class="mb-5" />
    <form @prevent.submit="updateUserInfo">
      <div class="flex">
        <div class="w-24">email</div>
        <div>
          <input class="border rounded" type="text" v-model="dataObj.email" />
        </div>
      </div>
      <div class="flex">
        <div class="w-24">age</div>
        <div>
          <input class="border rounded" type="number" v-model="dataObj.age" />
        </div>
      </div>
      <div class="flex">
        <div class="w-24">Text</div>
        <div>
          <input
            class="border rounded"
            type="text"
            v-model="dataObj.txt"
            @keyup.enter="updateUserInfo"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          class="border rounded p-2"
          @click="updateUserInfo"
        >
          Update
        </button>
        <button type="button" class="border rounded p-2">
          <nuxt-link :to="{ name: 'Vuex-Index' }">Cancel</nuxt-link>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    getUser() {
      return this.$store.getters.user(this.itemNum)
    },
  },
  data() {
    return {
      itemNum: {
        type: Number,
        default: null,
      },
      dataObj: {
        email: '',
        age: 0,
        txt: '',
      },
    }
  },
  created() {
    this.itemNum = this.$route.params.itemNum
    if (this.itemNum === undefined || this.itemNum === null) {
      this.$router.push('/Vuex/Register')
    } else {
      this.dataObj = Object.assign({}, this.getUser)
    }
  },
  methods: {
    ...mapGetters(['user']),
    ...mapActions(['updateOneUser']),
    updateUserInfo() {
      console.log('updateUserInfo methods')
      this.$store.dispatch('updateOneUser', {
        itemNum: this.itemNum,
        dataObj: this.dataObj,
      })
      this.$router.push('/Vuex/Index')
    },
  },
}
</script>
<style lang=""></style>
