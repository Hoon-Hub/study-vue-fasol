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
            @click="updateView(user)"
            type="button"
            class="border rounded-full hover:bg-black hover:text-white mb-1"
          >
            Edit
          </button>
          <button
            @click="deleteItem(user)"
            type="button"
            class="border rounded-full hover:bg-black hover:text-white mt-1"
          >
            Del
          </button>
        </div>
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
    ...mapActions(['getUsers']),
    ...mapMutations(['addUsers', 'deleteItem']),
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
    updateView(user) {},
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
