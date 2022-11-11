import { reactive } from "vue";

export const store = reactive({
  list: [],
  addList: function (item) {
    this.list.push(item);
  },
  updateItem: function (newName, index) {
    this.list[index].name = newName;
  },
});
