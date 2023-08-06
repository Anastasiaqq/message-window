<template>
    <div class="board">
        <div class="board__wrapper">
        <vueCustomScrollbar :settings="settings">
            <Message  v-for="m in localMessages" :key="m.id" :id="m.id" :msg="m" @like="e => likeHandler(e)" />
        </vueCustomScrollbar>
        </div>
    </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import Message from '@/components/Message.vue'
import { mapState } from 'pinia'
import { useMessageStore } from '@/stores/useMessageStore'

export default {
    name: 'Board',
    props: {
        someoneTyping: {
            type: Boolean,
            default: false
        },
        chatWith: String
    },
    data() {
        return {
            localMessages: [],
            settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
        }
    },
    mounted() {
        this.localMessages = this.messages;
        
    },
    updated() {
        this.localMessages.forEach((m, i) => {
            this.$set(m, 'liked', false)
        })
    },
    methods: {
        likeHandler(e) {
            this.localMessages.forEach(m =>{
                if(m.id === e) m.liked = !m.liked
            })
        }
    },
    computed: {
        ...mapState(useMessageStore, {
            messages: 'msg'
        }),
    },
    components: {
        Message,
        vueCustomScrollbar
    }
}
</script>
<style scoped>
.board >>> .ps-container {
    background: transparent !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
}
</style>