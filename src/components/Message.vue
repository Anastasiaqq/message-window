<template>
    <div @dblclick="$emit('like', msg.id)" class="message" :class="msg.amAuthor ? 'mine' : 'theirs'">
        <p class="ms message__author" v-if="!msg.amAuthor">{{ msg.author }}</p>
        <p class="ms message__text">{{ msg.content }}</p>
        <p class="ms message__date">{{ dateFormatted }}</p>
        <p v-if="msg.liked" class="message__liked">&hearts;</p>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        msg: {
            type: Object
        },
        
    },
    mounted() {
        this.$el.scrollIntoView()
    },
    methods: {
        prettyDate(date) {
            let numstr = date.toString()
            if(numstr.length === 1) numstr = '0'+numstr
            return numstr
        }
    },
    computed: {
            dateFormatted() {
                let day = `${this.prettyDate(this.msg.date.getDate())}.${this.prettyDate(this.msg.date.getMonth()+1)}.${this.prettyDate(this.msg.date.getFullYear())} ${this.prettyDate(this.msg.date.getHours())}:${this.prettyDate(this.msg.date.getMinutes())}`
                return day
            }
        }
}
</script>