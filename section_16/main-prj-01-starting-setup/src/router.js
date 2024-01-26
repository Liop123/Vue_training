import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachRegistation from './pages/coaches/CoachRegistation.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import NotFound from './pages/NotFound.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachList},
        {path: '/coaches/:id', component: CoachDetail, children : [
            {path: 'contract', component: ContactCoach}, // /coaches/c1/contact
        ]},
        {path: '/register', component: CoachRegistation},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ],
})

export default router