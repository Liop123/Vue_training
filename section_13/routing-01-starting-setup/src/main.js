import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      beforeEnter(to,from, next){
        next()
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {default: UsersList, footer: UserFooter}
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition){
    console.log(to, from, savedPosition)
    if(!savedPosition){return {left: 0, top: 0}}
    return savedPosition
  }
});

router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})

router.afterEach((to, from) =>{
    console.log("Global afterEach")
    console.log(to, from)
    if(to){
        return 'global block'
    }
    return this.footer
})



const app = createApp(App);

app.use(router);

app.mount('#app');
