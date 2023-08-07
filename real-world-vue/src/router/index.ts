import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import ShitView from '../views/ShitView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentListView.vue'
import EventDetailView from '../views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from "../views/NotFoundView.vue"
import NetworkErrorView from '../views/NetworkErrorView.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props : (route) => ({page: parseInt(route.query?.page as string || '1'),limit: parseInt(route.query?.limit as string || '2')})

    },
    {
      path: '/about',
      name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/shit',
      name: 'shit',
      component: ShitView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
      
    },{
        path: '/404/:resource',
        name: '404-resource',
        component: NotFoundView,
        props:true
    },
    {

      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,

    },
    {

      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView,

    }
    
    

  ]
})

router.beforeEach(() => {
  NProgress.start()
  })
  
  router.afterEach(() => {
    NProgress.done()
  })

export default router
