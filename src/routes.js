import home from './component/home/index.vue'
  import task1 from './component/home/task/task1.vue'
  import task2 from './component/home/task/task2.vue'
  import task3 from './component/home/task/task3.vue'
import car from './component/car/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: '/home',
        name: 'task1',
        component: task1
      },
      {
        path: '/home/task1',
        name: 'task1',
        component: task1
      },
      {
        path: '/home/task2',
        name: 'task2',
        component: task2
      },
      {
        path: '/home/task3',
        name: 'task3',
        component: task3
      }
    ]
  },
  {
    path: '/car',
    name: 'Car',
    component: car
  }
]

export default routes
