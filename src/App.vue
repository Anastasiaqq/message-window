<template>
  <div id="app">
    <MessageWindow :chatWith="chatWith" />
  </div>
</template>

<script>
import MessageWindow from './components/MessageWindow.vue'

export default {
  name: 'App',
  data() {return {
    chatWith: 'Pinia'
  }},
  components: {
    MessageWindow
  }
}
</script>


