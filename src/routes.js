import attendance from './component/attendance/index.vue'
import car from './component/car/index.vue'

const routes = [
  {
    path: '/',
    name: 'car',
    component: car
  },
  {
    path: '/car',
    name: 'Car',
    component: car
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: attendance,
  }
]

export default routes
