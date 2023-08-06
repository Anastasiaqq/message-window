import { defineStore } from "pinia";

export const useMessageStore = defineStore("messages", {
  state: () => {
    return {
      msg: [
        {
          id: 0,
          content: "Hi!",
          date: new Date(0),
          author: "Pinia",
          chatWith: "Pinia",
          amAuthor: false,
        },
      ],
    };
  },
  actions: {
    addMessage(obj) {
      let ob1 = obj;
      ob1.id = this.msg.length;
      this.msg.push(ob1);
    },
  },
});
