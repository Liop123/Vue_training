const app = Vue.createApp({
    data(){
        return{
            textClass: '',
            trigger: true,
            inputBackgroundColor: ''
        };
    },
    computed:{
        paramClass(){
            return{
                user1: this.textClass === 'user1',
                user2: this.textClass === 'user2',
                hidden: !this.trigger,
                visible: this.trigger
            };
        }
    },
    methods:{
        toggleButton(){
            this.trigger = !this.trigger
        }
    }
})

app.mount("#assignment")