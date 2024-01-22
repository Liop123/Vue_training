const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText
      // console.dir(this.$refs.userText)
    },
    beforeCreate(){
      console.log('beforeCreate()')
    },
    created(){
      console.log('created()')
    },
    beforeMount(){
      console.log('beforeMount')
    },
    mounted(){
      console.log('mounted()')
    },
    updated(){
      console.log('updated!')
    }
  },
});

const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: 'Pizza!'
    };
  }
})

app.mount('#app');

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
}

const handler = {
  set(target, key, value){
    if(key === 'message'){
      target.longMessage = value + 'World'
    }
    target.message = this.currentUserInput
    // console.log(target)
    // console.log(key)
    // console.log(value)
  }
}

const proxy = new Proxy(data, handler) 

proxy.message = 'Hello!!!!'