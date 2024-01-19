const app = Vue.createApp({
  data() {
    return {
       goals: [],
       enteredValue: ''
       };
  },
  methods:{
    pushMessage(){
      if(this.enteredValue !== ''){
        this.goals.push(this.enteredValue)
      }
    },
    removeGoal(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
