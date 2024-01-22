const app = Vue.createApp({
    data(){
        return{
            friends: [{
                id: 'manuel',
                name: 'MANUEL Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@locakhost,com'
            },
            {
                id: 'julie',
                name: 'Juile Jomes',
                phone: '09876 543 221',
                email: 'Juile@locakhost,com'
            }
        ]
        };
    }
})

app.component('friend-contact', {
    template: `<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'MANUEL Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@locakhost,com'
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount("#app")