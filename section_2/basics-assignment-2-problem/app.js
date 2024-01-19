const app = Vue.createApp({
    data(){
        return{
            message: 'yoyoyo',
            name1: '',
            name2: ''
        };
    },
    methods: {
        alertMessage(){
            alert(this.message)
        },
        setName1(event){
            if(event.target.value == null){return ''}
            this.name1 = event.target.value
        },
        setName2(event){
            if(event.target.value == null){return ''}
            this.name2 = event.target.value
        }
    }
})
app.mount("#assignment")