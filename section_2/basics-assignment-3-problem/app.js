const app = Vue.createApp({
    data(){
        return{
            counter: 0
        };
    },
    watch:{
        counter(){
            const that = this
            setTimeout(() => {
                that.counter = 0
            }, 5000);
        }
    },
    methods: {
        add5(){
            this.counter += 5
        },
        add1(){
            this.counter += 1
        },
        calResult(){
            if(this.counter === 0) return ''
            if(this.counter < 37){
                return 'Not there yet until you reach a result of exactly 37'
            }else if(this.counter > 37){
                return 'Too much! if the result is greater than 37'
            }else if(this.counter === 37){
                return 'you reach a result of exactly 37'
            }
        },
        resetNumber(){
            this.counter = 0
        }
    }
})

app.mount("#assignment")