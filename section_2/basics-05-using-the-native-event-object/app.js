const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      //fullname: '',
      lastName: ''
    };
  },
  computed: {
    fullname(){
      console.log('Running again...')
      if(this.name === '' || this.lastName === ''){return ''}
      return this.name + ' ' + this.lastName
    }
  },
  watch:{
    counter(value){
      if(value>50){
        const that = this
        setTimeout(() => {
          that.counter = 0
        }, 2000);
      }
    }
    // name(value){
    //   if(value === ''){this.fullname = ''}
    //   this.fullname = value + ' ' + this.lastName
    // },
    // lastName(value){
    //   if(value === ''){this.fullname = ''}
    //   this.fullname = this.name + ' ' + value
    // }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName(){
      this.name = ''
    },
    outputFullName(){
      if(this.name === ''){return ''}
      return this.name + ' ' + 'abcd'
    }
  }
});

app.mount('#events');
