const app = Vue.createApp({
    data(){
        return{
            name: 'Danny',
            age: 25,
        };
    },
    methods: {
        calAge(){
            return this.age + 5
        },
        calRandom(){
            return Math.random()
        }
    }
})

app.mount("#assignment")