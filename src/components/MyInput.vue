<template>
    <div class="my-input">
        <textarea class="my-input__input" name="msg" id="msg" ref="msg" cols="30" rows="1" @keyup="keyUpHandler" v-model="content"></textarea>
        <button class="my-input__send" @click="clickSendHandler">send</button>
    </div>
</template>

<script>
import {useMessageStore} from '@/stores/useMessageStore'

export default {
    name: 'MyInput',
    data() {
        return {
            content: '',
            area: undefined,
            msgStore: useMessageStore()
        }
    },
    mounted() {
        this.area = this.$refs.msg
    },
    methods: {
        keyUpHandler(k) {
            if(k.code === 'Enter') {
                this.sendMessageHandler(this.content)
                this.content = ''
                this.area.blur()
                this.area.focus()
            }
        },
        sendMessageHandler(m) {
            let m1 = m
            let regex = new RegExp('\n')
            if(regex.test(m1)) {
                m1 = m1.replace(regex, '')
            }
            if(m1.length === 0) return
            let obj = {content: m1, date: new Date(), author: 'Me', chatWith: "Pinia", amAuthor: true}
            this.msgStore.addMessage(obj)
            this.$emit('timetotype', true)
            
        },
        clickSendHandler() {
            this.sendMessageHandler(this.content)
            this.content =''
        }
    },
}
</script>