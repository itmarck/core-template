import { RouteRecordRaw } from 'vue-router'

import workspace from './workspace/router/routes'
import shared from './shared/router/routes'

const routes: Array<RouteRecordRaw> = [...shared, ...workspace]

export { routes }
