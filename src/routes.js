import attendance from './component/attendance/index.vue'
import car from './component/car/index.vue'

const routes = [
  {
    path: '/',
    name: 'attendance',
    component: attendance
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: attendance,
  },
  {
    path: '/car',
    name: 'Car',
    component: car
  }
]

export default routes
