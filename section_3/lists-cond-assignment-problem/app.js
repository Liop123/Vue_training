const app = Vue.createApp({
    data(){
        return{
            inputMessage: '',
            messageList: [],
            trigger: true
        };
    },
    methods:{
        addTask(){
            if(this.inputMessage === ''){ return;}
            this.messageList.push(this.inputMessage)
        },
        toggleButton(){
            this.trigger = !this.trigger
        }
    }
})

app.mount("#assignment")