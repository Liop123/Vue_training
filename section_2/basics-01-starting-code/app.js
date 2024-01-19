const app = Vue.createApp({
    data(){
        return {
            courseGoalA: '<h3>Finish the course and learn Vue!</h3>',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://github.com/Liop123/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){ return this.courseGoalA}
            else{ return this.courseGoalB}
        }
    },
})

app.mount('#user-goal')
