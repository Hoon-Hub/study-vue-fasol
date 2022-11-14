<template lang="">
  <div>
    <h1>Register</h1>

    <div class="grid grid-rows-4 gap-3 text-center w-4/5">
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
          <input class="border rounded" type="text" v-model="dataObj.txt" />
        </div>
      </div>

      <div>
        <button type="button" class="border rounded p-2" @click="addNewUser">
          Regist
        </button>
        <button type="button" class="border rounded p-2" @click="resetItems">
          Reset
        </button>
      </div>
    </div>

    <div class="flex mt-5 dis-card">
      <List />
    </div>
  </div>
</template>
<script>
import List from './List.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: { List },
  data() {
    return {
      editCheck: false,
      dataObj: {
        email: '',
        age: '',
        txt: '',
      },
    }
  },
  methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['addUsers']),
    addNewUser() {
      if (
        this.dataObj.email === '' ||
        this.dataObj.age === '' ||
        this.dataObj.txt === ''
      ) {
        return
      } else {
        this.addUsers(this.dataObj)
        this.resetItems()
      }
    },
    resetItems() {
      this.dataObj.email = ''
      this.dataObj.age = ''
      this.dataObj.txt = ''
    },
  },
}
</script>
<style>
.dis-card {
  display: flex;
  flex-direction: row;
}
@media (max-width: 500px) {
  .dis-card {
    flex-direction: column;
  }
}
</style>
