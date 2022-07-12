import Vue from 'vue'
import Router from 'vue-router'
import Approval from '@/pages/Approval/Approval.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/approval",
      name: 'approval',
      component: Approval
    }
  ]
})