import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/workspace',
    component: () => import('../views/WorkspaceMainView.vue'),
  },
]

export default routes
