<template lang="">
  <div class="w-full items-center">
    <form @submit.prevent="addNewItem" class="w-full">
      <input
        type="text"
        max-length="24"
        class="rounded w-4/5 h-9 mb-3 mx-auto block text-black"
        placeholder="제목을 입력해주세요"
        v-model="newTitle"
      />
      <textarea
        class="text-black block mx-auto"
        cols="30"
        rows="10"
        v-model="newContent"
      ></textarea
      ><br />
      <div class="mx-auto w-4/5 flex space-between">
        <button
          type="submit"
          class="h-10 border border-zinc-200 text-xl px-3 rounded ml-1 flex-1 hover:bg-white hover:text-gray-800"
        >
          Add
        </button>
        <button
          type="button"
          class="h-10 border border-zinc-200 text-xl px-3 rounded ml-1 flex-1 hover:bg-white hover:text-gray-800"
          @click="CloseNewItem"
        >
          Close
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTitle: "",
      newContent: "",
    };
  },
  methods: {
    addNewItem() {
      if (this.newContent == "") {
        return;
      } else {
        const newItem = {
          title: this.newTitle,
          content: this.newContent,
        };
        this.$emit("addNewContent", newItem);
        this.newTitle = "";
        this.newContent = "";
      }
    },
    CloseNewItem() {
      this.$emit("closeNewItem");
    },
  },
};
</script>
<style scoped>
textarea {
  width: 80%;
  height: 200px;
  resize: none;
}
</style>
