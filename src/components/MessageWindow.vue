<template>
  <div class="win">
    <div class="win__chat">
      <p class="win__name">{{ chatWith }}</p>
      <p v-if="someoneTyping" class="typing">
        <span>typing</span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </p>
    </div>
    <Board :chatWith="chatWith" />
    <MyInput @timetotype="e => sendHandler(e)"/>
  </div>
</template>

<script>
import Board from './Board.vue'
import MyInput from './MyInput.vue'
import {useMessageStore} from '@/stores/useMessageStore'

export default {
  name: 'MessageWindow',
  props: {
    chatWith: String
  },
  data() {
    return {
      someoneTyping: false,
      msgStore: useMessageStore(),
    }
  },
  methods: {
    sendHandler(e) {
      this.someoneTyping = e;
      setTimeout(()=> {
        this.someoneTyping = false
        this.typeAnswerFromPinia()
      }, 5000)
    },
    typeAnswerFromPinia() {
      let obj = {content: `Hi I'm Pinia nice to hear from you`, date: new Date(), author: 'Pinia', chatWith: "Pinia", amAuthor: false}
      this.msgStore.addMessage(obj)
    }
  },
  components: {
    Board,
    MyInput
  }
}
</script>

